import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";

const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 4174);
const mountPath = "/balrock/";
const distDir = path.resolve("dist");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
};

function getContentType(filePath) {
  return contentTypes[path.extname(filePath)] ?? "application/octet-stream";
}

async function sendFile(response, filePath) {
  const body = await readFile(filePath);

  response.writeHead(200, { "Content-Type": getContentType(filePath) });
  response.end(body);
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${host}:${port}`);

  if (!requestUrl.pathname.startsWith(mountPath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const relativePath = requestUrl.pathname.slice(mountPath.length);
  const filePath =
    relativePath === "" || !path.extname(relativePath)
      ? path.join(distDir, "index.html")
      : path.join(distDir, relativePath);

  try {
    await sendFile(response, filePath);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Base path server listening on http://${host}:${port}${mountPath}`);
});
