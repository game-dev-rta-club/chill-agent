#!/usr/bin/env node
// Install-free starter. It checks the tools needed to fetch the CLI, then lets
// the CLI selected by ../cli.json set up the project. Everything after setup,
// including Web and the first Goal, belongs to that CLI.
import {spawnSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const skill=dirname(dirname(fileURLToPath(import.meta.url)));
const usage='Usage: node <skill>/scripts/start.mjs --harness <codex-desktop|claude-code> [--project <native project directory>]';

export function setupArguments({harness,project,skillDirectory=skill}){
 if(!['codex-desktop','claude-code'].includes(harness))throw Error(`Specify the calling harness. ${usage}`);
 const versionFile=join(skillDirectory,'cli.json');
 const spec=JSON.parse(readFileSync(versionFile,'utf8')).package;
 if(typeof spec!=='string'||!spec.trim())throw Error('cli.json must name the CLI package: {"package": "<npm package spec>"}.');
 return {spec,args:['-y',spec,'setup','prepare','--isolated','--project',resolve(project),'--harness',harness,'--version-file',versionFile,'--agent-guide',join(skillDirectory,'SKILL.md')]};
}

// Report every missing tool at once; installing them stays the user's decision.
export function missingTools(spec,{version=process.versions.node,probe=command=>spawnSync(command,['--version'],{encoding:'utf8',shell:process.platform==='win32'}).status===0}={}){
 const [major,minor]=version.split('.').map(Number),missing=[];
 if(major<24||major===24&&minor<15)missing.push('Node.js 24.15 or later');
 if(!probe('npm'))missing.push('npm');
 if(/^(github:|git\+|git:|git@)/.test(spec)&&!probe('git'))missing.push('Git (cli.json selects a git commit)');
 return missing;
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{
  const values={};const args=process.argv.slice(2);
  for(let i=0;i<args.length;i+=2){if(!['--harness','--project'].includes(args[i])||!args[i+1])throw Error(usage);values[args[i]]=args[i+1];}
  const {spec,args:npx}=setupArguments({harness:values['--harness'],project:values['--project']||process.cwd()});
  const missing=missingTools(spec);
  if(missing.length)throw Error(`Install before continuing: ${missing.join(', ')}. Explain each tool's purpose to the user and ask before installing.`);
  const result=spawnSync('npx',npx,{stdio:'inherit',shell:process.platform==='win32'});
  process.exitCode=result.status??1;
 }catch(error){console.error(error.message);process.exitCode=1;}
}
