import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';
const mime = {
  '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8',
  '.svg':'image/svg+xml', '.webp':'image/webp', '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg', '.png':'image/png', '.ico':'image/x-icon',
  '.txt':'text/plain; charset=utf-8'
};

function safePath(raw) {
  let decoded;
  try { decoded = decodeURIComponent(raw); } catch { return null; }
  if (decoded.includes('\0') || decoded.includes('\\')) return null;
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const normalized = path.posix.normalize(relative);
  if (normalized === '..' || normalized.startsWith('../') || normalized.startsWith('/') || normalized === '.') return null;
  if (normalized !== 'index.html' && !normalized.startsWith('assets/')) return null;
  return path.join(root, normalized);
}

createServer(async (req, res) => {
  if (!['GET','HEAD'].includes(req.method || '')) {
    res.writeHead(405, {'Content-Type':'text/plain; charset=utf-8','Allow':'GET, HEAD'});
    return res.end('Método não permitido');
  }
  let pathname;
  try { pathname = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname; }
  catch { res.writeHead(400); return res.end('Endereço inválido'); }
  const filename = safePath(pathname);
  if (!filename) { res.writeHead(404); return res.end('Página não encontrada'); }
  try {
    const file = await stat(filename);
    if (!file.isFile()) throw new Error('Not file');
    const extension = path.extname(filename).toLowerCase();
    res.writeHead(200, {
      'Content-Type':mime[extension] || 'application/octet-stream',
      'Cache-Control':extension === '.html' ? 'no-cache' : 'public, max-age=3600',
      'X-Content-Type-Options':'nosniff'
    });
    if (req.method === 'HEAD') return res.end();
    const stream = createReadStream(filename);
    stream.on('error', () => res.destroy());
    stream.pipe(res);
  } catch { res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); res.end('Página não encontrada'); }
}).listen(port,host,() => console.log(`Studio Gabi Lima disponível em http://localhost:${port}`));
