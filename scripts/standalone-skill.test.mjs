import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {setupArguments,missingTools} from '../plugins/chill-agent/skills/chill-agent/scripts/start.mjs';

const skill=fileURLToPath(new URL('../plugins/chill-agent/skills/chill-agent/',import.meta.url));

test('the skill ships cli.json with exactly one npm package spec',async()=>{
 const value=JSON.parse(await readFile(join(skill,'cli.json'),'utf8'));
 assert.deepEqual(Object.keys(value),['package']);
 assert.ok(typeof value.package==='string'&&value.package.trim()&&!/[\r\n]/.test(value.package));
});

test('the starter hands setup the version file and agent guide of its own skill',async t=>{
 const dir=await mkdtemp(join(tmpdir(),'chill-starter-'));t.after(()=>rm(dir,{recursive:true,force:true}));
 await mkdir(join(dir,'skill'));await writeFile(join(dir,'skill/cli.json'),JSON.stringify({package:'github:org/cli#abc'}));
 const {spec,args}=setupArguments({harness:'claude-code',project:dir,skillDirectory:join(dir,'skill')});
 assert.equal(spec,'github:org/cli#abc');
 assert.deepEqual(args,['-y','github:org/cli#abc','setup','prepare','--isolated','--project',dir,'--harness','claude-code','--version-file',join(dir,'skill/cli.json'),'--agent-guide',join(dir,'skill/SKILL.md')]);
 assert.throws(()=>setupArguments({harness:'unknown',project:dir,skillDirectory:join(dir,'skill')}),/calling harness/);
 await writeFile(join(dir,'skill/cli.json'),'{}');
 assert.throws(()=>setupArguments({harness:'codex-desktop',project:dir,skillDirectory:join(dir,'skill')}),/must name the CLI package/);
});

test('missing tools are reported together; Git is needed only for a git-based CLI',()=>{
 const none=()=>false,all=()=>true;
 assert.deepEqual(missingTools('https://example.com/cli.tgz',{version:'24.15.0',probe:all}),[]);
 assert.deepEqual(missingTools('https://example.com/cli.tgz',{version:'24.14.9',probe:none}),['Node.js 24.15 or later','npm']);
 assert.deepEqual(missingTools('github:org/cli#abc',{version:'25.0.0',probe:command=>command!=='git'}),['Git (cli.json selects a git commit)']);
});
