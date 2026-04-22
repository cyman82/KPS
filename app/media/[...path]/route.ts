import { readFile } from "fs/promises";
import path from "path";

const contentTypeMap: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v"
};

export async function GET(
  request: Request,
  context: { params: { path: string[] } }
) {
  const mediaRoot = path.resolve(process.cwd(), "media");
  const requestedPath = context.params.path.join(path.sep);
  const filePath = path.resolve(mediaRoot, requestedPath);

  if (!filePath.startsWith(mediaRoot)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const file = await readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const contentType = contentTypeMap[extension] ?? "application/octet-stream";

    return new Response(file, {
      status: 200,
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=3600"
      }
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
