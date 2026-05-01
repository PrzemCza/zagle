import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const RSC_DIR = path.join(process.cwd(), "rsc");

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

export async function GET(
  _request: Request,
  { params }: { params: { path: string[] } }
) {
  const segments = params.path ?? [];
  if (segments.length === 0 || segments.some((segment) => segment.includes(".."))) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  const filePath = path.join(RSC_DIR, ...segments);
  const normalized = path.normalize(filePath);
  if (!normalized.startsWith(path.normalize(RSC_DIR + path.sep))) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const data = await readFile(normalized);
    const ext = path.extname(normalized).toLowerCase();
    const contentType = MIME_TYPES[ext] ?? "application/octet-stream";

    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
