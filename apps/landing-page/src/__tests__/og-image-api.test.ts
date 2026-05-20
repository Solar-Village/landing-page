import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const createResponse = () => {
  let body: Buffer | string = "";
  const headers: Record<string, string> = {};
  return {
    res: {
      statusCode: 0,
      setHeader: (name: string, value: string) => {
        headers[name] = value;
      },
      end: (chunk?: string | Buffer) => {
        if (chunk !== undefined) {
          body = chunk;
        }
      },
    },
    getBody: () => body,
    getHeaders: () => headers,
  };
};

describe("og image api", () => {
  let tempDir = "";
  let tempPath = "";

  const loadHandler = async () =>
    (await import("../../api/og-image")).default;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), "og-image-"));
    tempPath = join(tempDir, "preview.png");
    writeFileSync(tempPath, Buffer.from("mock"));
    process.env.OG_IMAGE_PATH = tempPath;
  });

  afterEach(() => {
    vi.resetModules();
    delete process.env.OG_IMAGE_PATH;
    if (tempDir) {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it("returns png image for GET", async () => {
    const handler = await loadHandler();
    const { res, getBody, getHeaders } = createResponse();
    handler({ method: "GET" }, res);

    expect(res.statusCode).toBe(200);
    expect(getHeaders()["content-type"]).toBe("image/png");

    const body = getBody();
    expect(body instanceof Buffer).toBe(true);
    expect((body as Buffer).length).toBeGreaterThan(0);
  });

  it("returns headers without body for HEAD", async () => {
    const handler = await loadHandler();
    const { res, getBody, getHeaders } = createResponse();
    handler({ method: "HEAD" }, res);

    expect(res.statusCode).toBe(200);
    expect(getHeaders()["content-type"]).toBe("image/png");
    expect(getBody()).toBe("");
  });

  it("rejects non-GET methods", async () => {
    const handler = await loadHandler();
    const { res, getBody, getHeaders } = createResponse();
    handler({ method: "POST" }, res);

    expect(res.statusCode).toBe(405);
    expect(getHeaders()["content-type"]).toBe("application/json");
    expect(JSON.parse(getBody() as string)).toEqual({
      ok: false,
      error: "Method not allowed",
    });
  });
});
