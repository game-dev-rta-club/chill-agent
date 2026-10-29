#!/usr/bin/env node
// End-to-end check: the skill's starter fetches the CLI named in chill-agent.json and
// completes setup in a disposable project and data directory. It needs network
// access and starts no server.
import {spawnSync} from 'node:child_process';
import {mkdtemp,mkdir,readFile,realpath,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';

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
 const result=spawnSync(process.execPath,[join(skill,'scripts/start.mjs'),'--harness','claude-code','--project',project],{env,encoding:'utf8',timeout:10*60*1000,maxBuffer:16*1024*1024});
 // A timeout reports itself, not as a later cleanup error.
 if(result.error)throw Error(`Starter did not finish: ${result.error.message}`);
 if(result.status!==0)throw Error(`Starter failed (${result.status}):\n${result.stderr}`);
 const setup=JSON.parse(result.stdout);
 const expected=JSON.parse(await readFile(join(skill,'chill-agent.json'),'utf8')).package;
 if(setup.package!==expected)throw Error(`Setup prepared ${setup.package}, expected ${expected}.`);
 if(!/session start --harness claude-code/.test(setup.next))throw Error('Setup did not name session start as the next step.');
 // PowerShell and cmd use chill.cmd on Windows; the sh entry is for Git Bash and macOS.
 const help=process.platform==='win32'
  ?spawnSync('cmd.exe',['/d','/s','/c',`""${join(dirname(setup.entry),'chill.cmd')}" connection --help"`],{encoding:'utf8',windowsVerbatimArguments:true})
  :spawnSync(setup.entry,['connection','--help'],{encoding:'utf8'});
 if(help.status!==0)throw Error(`The prepared entry does not run: ${help.stderr}`);
 console.log(`Skill install check passed: ${expected}`);
}finally{
 // npm's git clone can stay locked for a moment on Windows; cleanup must not hide the result.
 await rm(dir,{recursive:true,force:true,maxRetries:10,retryDelay:500}).catch(error=>console.error(`Cleanup left ${dir}: ${error.code}`));
}
