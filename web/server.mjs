import http from 'node:http';
import { readFile, stat, realpath } from 'node:fs/promises';
import { dirname, resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8' };
const server = http.createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end('Method not allowed'); return; }
    let path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (path === '/') { res.writeHead(302, { Location: '/web/' }); res.end(); return; }
    if (path.split('/').some(p => p.startsWith('.')) || path.includes('\0')) { res.writeHead(403); res.end('Forbidden'); return; }
    let file = resolve(root, `.${path}`);
    if (!file.startsWith(root + sep)) { res.writeHead(403); res.end('Forbidden'); return; }
    if ((await stat(file)).isDirectory()) {
      if (!path.endsWith('/')) { res.writeHead(302, { Location: `${path}/` }); res.end(); return; }
      file = resolve(file, 'index.html');
    }
    const actual = await realpath(file);
    if (!actual.startsWith(root + sep)) { res.writeHead(403); res.end('Forbidden'); return; }
    const mime = types[extname(file)];
    if (!mime) { res.writeHead(404); res.end('Not found'); return; }
    const bytes = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime, 'Content-Length': bytes.length, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache' });
    res.end(req.method === 'HEAD' ? undefined : bytes);
  } catch { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('페이지를 찾을 수 없습니다. /web/에서 시작해 주세요.'); }
});
server.on('error', error => { console.error(`학습 웹을 시작하지 못했습니다: ${error.message}`); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`같이, Git → http://127.0.0.1:${port}/web/`));
