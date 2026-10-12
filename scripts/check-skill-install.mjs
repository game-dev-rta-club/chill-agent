#!/usr/bin/env node
// End-to-end check: the skill's starter fetches the CLI named in cli.json and
// completes setup in a disposable project and data directory. It needs network
// access and starts no server.
import {spawnSync} from 'node:child_process';
import {mkdtemp,mkdir,readFile,realpath,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

// The CLI does not qualify its Claude hooks on Windows, so Windows checks Codex setup.
const harness=process.platform==='win32'?'codex-desktop':'claude-code';
const skill=fileURLToPath(new URL('../plugins/chill-agent/skills/chill-agent/',import.meta.url));
// npm leaves out dependencies from the CLI's shrinkwrap when it installs under a
// symlinked path, such as the macOS temp directory; use the real path.
const dir=await mkdtemp(join(await realpath(tmpdir()),'chill-skill-install-'));
try{
 const project=join(dir,'project');await mkdir(project);
 // Setup keeps isolated project stores under the home directory; use a disposable one.
 const home=join(dir,'home');await mkdir(home);
 const env={...process.env,HOME:home,USERPROFILE:home,npm_config_cache:join(dir,'npm-cache')};
 for(const key of ['CHILL_AGENT_DATA_DIR','CHILL_AGENT_HARNESS','CHILL_AGENT_SESSION_ID','CHILL_AGENT_CONNECTION_GENERATION','PORT'])delete env[key];
 const result=spawnSync(process.execPath,[join(skill,'scripts/start.mjs'),'--harness',harness,'--project',project],{env,encoding:'utf8',timeout:10*60*1000,maxBuffer:16*1024*1024});
 if(result.status!==0)throw Error(`Starter failed (${result.status}):\n${result.stderr}`);
 const setup=JSON.parse(result.stdout);
 const expected=JSON.parse(await readFile(join(skill,'cli.json'),'utf8')).package;
 if(setup.package!==expected)throw Error(`Setup prepared ${setup.package}, expected ${expected}.`);
 if(!setup.next.includes(`session start --harness ${harness}`))throw Error('Setup did not name session start as the next step.');
 const help=spawnSync(setup.entry,['connection','--help'],{encoding:'utf8',shell:process.platform==='win32'});
 if(help.status!==0)throw Error(`The prepared entry does not run: ${help.stderr}`);
 console.log(`Skill install check passed (${harness}): ${expected}`);
}finally{await rm(dir,{recursive:true,force:true});}
