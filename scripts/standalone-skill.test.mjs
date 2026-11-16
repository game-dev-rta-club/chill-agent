import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {setupArguments,missingTools,npmScript} from '../plugins/chill-agent/skills/chill-agent/scripts/start.mjs';

const skill=fileURLToPath(new URL('../plugins/chill-agent/skills/chill-agent/',import.meta.url));

test('the skill ships chill-agent.json with exactly one npm package spec',async()=>{
 const value=JSON.parse(await readFile(join(skill,'chill-agent.json'),'utf8'));
 assert.deepEqual(Object.keys(value),['package']);
 assert.ok(typeof value.package==='string'&&value.package.trim()&&!/[\r\n]/.test(value.package));
});

test('the starter hands setup the version file of its own skill',async t=>{
 const dir=await mkdtemp(join(tmpdir(),'chill-starter-'));t.after(()=>rm(dir,{recursive:true,force:true}));
 await mkdir(join(dir,'skill'));await writeFile(join(dir,'skill/chill-agent.json'),JSON.stringify({package:'github:org/cli#abc'}));
 const {spec,args}=setupArguments({harness:'claude-code',project:dir,skillDirectory:join(dir,'skill')});
 assert.equal(spec,'github:org/cli#abc');
 assert.deepEqual(args,['-y','github:org/cli#abc','setup','prepare','--isolated','--project',dir,'--harness','claude-code','--version-file',join(dir,'skill/chill-agent.json')]);
 assert.throws(()=>setupArguments({harness:'unknown',project:dir,skillDirectory:join(dir,'skill')}),/calling harness/);
 await writeFile(join(dir,'skill/chill-agent.json'),'{}');
 assert.throws(()=>setupArguments({harness:'codex-desktop',project:dir,skillDirectory:join(dir,'skill')}),/must name the CLI package/);
});

test('missing tools are reported together; Git is needed only for a git-based CLI',()=>{
 const none=()=>false,all=()=>true;
 assert.deepEqual(missingTools('https://example.com/cli.tgz',{version:'24.15.0',probe:all}),[]);
 assert.deepEqual(missingTools('https://example.com/cli.tgz',{version:'24.14.9',probe:none}),['Node.js 24.15 or later','npm']);
 assert.deepEqual(missingTools('github:org/cli#abc',{version:'25.0.0',probe:command=>command!=='git'}),['Git (chill-agent.json selects a git commit)']);
});

test('npm and npx run through Node on Windows only, so no shell splits the arguments',()=>{
 const node=join(tmpdir(),'node js','node.exe'),npx=join(tmpdir(),'node js','node_modules','npm','bin','npx-cli.js');
 assert.equal(npmScript('npx',{platform:'darwin',node,exists:()=>true}),null);
 assert.equal(npmScript('npx',{platform:'win32',node,exists:path=>path===npx}),npx);
 assert.equal(npmScript('git',{platform:'win32',node,exists:()=>true}),null);
 assert.equal(npmScript('npm',{platform:'win32',node,exists:()=>false}),null,'without npm beside Node, the shell is used as before');
});
