import { readFileSync } from "node:fs";
import { resolve } from "node:path";

type ApiResponse = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: string | Buffer) => void;
};

type ApiRequest = {
  method?: string;
};

const handler = (req: ApiRequest, res: ApiResponse) => {
  if (req.method && !["GET", "HEAD"].includes(req.method)) {
    res.statusCode = 405;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
    return;
  }

  const imagePath = resolve(
    process.cwd(),
    "src",
    "assets",
    "solar-village-preview.png"
  );
  const imageBuffer = readFileSync(imagePath);

  res.statusCode = 200;
  res.setHeader("content-type", "image/png");
  res.setHeader("cache-control", "public, max-age=3600");

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  res.end(imageBuffer);
};

export default handler;
