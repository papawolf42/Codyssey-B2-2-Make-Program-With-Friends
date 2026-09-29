import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script } from 'node:vm';
import { buildHtml } from '../build.mjs';

test('the shipped HTML matches the sources and can run without fetching any scripts or styles', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.equal(html, await buildHtml(), 'Run npm run build after changing the sources.');
  assert.doesNotMatch(html, /<script\b[^>]*\b(?:src|type)\s*=/i);
  assert.doesNotMatch(html, /<link\b[^>]*rel=["']stylesheet["']/i);
  assert.doesNotMatch(html, /\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/);
  assert.match(html, /<style>[\s\S]+<\/style>/);
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1);
  assert.ok(html.indexOf('<div id="app">') < html.indexOf('<script>'));
  assert.doesNotThrow(() => new Script(scripts[0][1]), 'The inline bundle must be valid classic JavaScript.');
});
