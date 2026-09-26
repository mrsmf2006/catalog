import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {defineConfig, Plugin, ViteDevServer} from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const pdfScript = path.join(rootDir, 'generate-pdf.cjs');
const publicPdf = path.join(rootDir, 'public', 'catalog.pdf');

function sendPdf(res: http.ServerResponse) {
  const data = fs.readFileSync(publicPdf);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="catalog-toyooran.pdf"');
  res.setHeader('Content-Length', String(data.length));
  res.end(data);
}

function runPdfGenerator(catalogUrl: string) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(process.execPath, [pdfScript], {
      cwd: rootDir,
      env: {
        ...process.env,
        CATALOG_URL: catalogUrl,
      },
      stdio: 'inherit',
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0 && fs.existsSync(publicPdf)) resolve();
      else reject(new Error(`PDF generator exited with code ${code ?? 'unknown'}`));
    });
  });
}

function pdfGeneratorPlugin(): Plugin {
  let generating: Promise<void> | null = null;

  const handle = (server: ViteDevServer) => {
    return async (req: http.IncomingMessage, res: http.ServerResponse, next: () => void) => {
      const url = req.url?.split('?')[0];
      if (url !== '/api/generate-pdf') {
        next();
        return;
      }

      const port = server.config.server.port || 3000;
      const catalogUrl = `http://127.0.0.1:${port}/?print=true`;

      try {
        if (!generating) {
          generating = runPdfGenerator(catalogUrl).finally(() => {
            generating = null;
          });
        }
        await generating;
        sendPdf(res);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('PDF generation failed:', message);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({error: message}));
      }
    };
  };

  return {
    name: 'pdf-generator-api',
    configureServer(server) {
      server.middlewares.use(handle(server));
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), pdfGeneratorPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
