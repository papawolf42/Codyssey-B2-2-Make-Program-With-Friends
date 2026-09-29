import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// This is only a maintenance tool. Opening the generated HTML needs no Node.js.
export async function buildHtml() {
  const names = ['index.template.html', 'style.css', 'content.js', 'logic.js', 'app.js'];
  const [template, css, ...modules] = await Promise.all(names.map(name => readFile(new URL(name, import.meta.url), 'utf8')));
  const script = modules.map(source => source
    .replace(/^import \{[^\n]+\} from ['"].+['"];\r?\n/gm, '')
    .replace(/^export (?=(?:const|function)\b)/gm, '')
  ).join('\n\n').replace(/<\/script/gi, '<\\/script');
  if (/<\/style/i.test(css)) throw new Error('The stylesheet contains an HTML closing tag.');
  return template
    .replace('<!-- INLINE_STYLE -->', () => `<style>\n${css}\n</style>`)
    .replace('<!-- INLINE_SCRIPT -->', () => `<script>\n(() => {\n'use strict';\n${script}\n})();\n</script>`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await writeFile(new URL('index.html', import.meta.url), await buildHtml());
  console.log('index.html 생성 완료 — 파일을 더블클릭해서 여세요.');
}
