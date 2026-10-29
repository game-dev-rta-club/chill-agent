#!/usr/bin/env node
// Install-free starter. It checks the tools needed to fetch the CLI, then lets
// the CLI selected by ../chill-agent.json set up the project. Everything after setup,
// including Web and the first Goal, belongs to that CLI.
import {spawnSync} from 'node:child_process';
import {existsSync,readFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const skill=dirname(dirname(fileURLToPath(import.meta.url)));
const usage='Usage: node <skill>/scripts/start.mjs --harness <codex-desktop|claude-code> [--project <native project directory>]';

export function setupArguments({harness,project,skillDirectory=skill}){
 if(!['codex-desktop','claude-code'].includes(harness))throw Error(`Specify the calling harness. ${usage}`);
 const versionFile=join(skillDirectory,'chill-agent.json');
 const spec=JSON.parse(readFileSync(versionFile,'utf8')).package;
 if(typeof spec!=='string'||!spec.trim())throw Error('chill-agent.json must name the CLI package: {"package": "<npm package spec>"}.');
 return {spec,args:['-y',spec,'setup','prepare','--isolated','--project',resolve(project),'--harness',harness,'--version-file',versionFile,'--agent-guide',join(skillDirectory,'SKILL.md')]};
}

// Windows cannot start npm's .cmd shims without a shell, which would split
// paths with spaces; run npm's own scripts with this Node there instead.
export function npmScript(command,{platform=process.platform,node=process.execPath,exists=existsSync}={}){
 if(platform!=='win32'||!['npm','npx'].includes(command))return null;
 const script=join(dirname(node),'node_modules','npm','bin',`${command}-cli.js`);
 return exists(script)?script:null;
}
// Only npm's .cmd shims need a shell on Windows; git.exe starts directly.
function run(command,args,options){
 const script=npmScript(command);
 return script?spawnSync(process.execPath,[script,...args],options):spawnSync(command,args,{...options,shell:process.platform==='win32'&&['npm','npx'].includes(command)});
}

// Report every missing tool at once; installing them stays the user's decision.
export function missingTools(spec,{version=process.versions.node,probe=command=>run(command,['--version'],{encoding:'utf8'}).status===0}={}){
 const [major,minor]=version.split('.').map(Number),missing=[];
 if(major<24||major===24&&minor<15)missing.push('Node.js 24.15 or later');
 if(!probe('npm'))missing.push('npm');
 if(/^(github:|git\+|git:|git@)/.test(spec)&&!probe('git'))missing.push('Git (chill-agent.json selects a git commit)');
 return missing;
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{
  const values={};const args=process.argv.slice(2);
  for(let i=0;i<args.length;i+=2){if(!['--harness','--project'].includes(args[i])||!args[i+1])throw Error(usage);values[args[i]]=args[i+1];}
  const {spec,args:npx}=setupArguments({harness:values['--harness'],project:values['--project']||process.cwd()});
  const missing=missingTools(spec);
  if(missing.length)throw Error(`Install before continuing: ${missing.join(', ')}. Explain each tool's purpose to the user and ask before installing.`);
  const result=run('npx',npx,{stdio:'inherit'});
  process.exitCode=result.status??1;
 }catch(error){console.error(error.message);process.exitCode=1;}
}
