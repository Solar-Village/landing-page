import { describe, expect, it } from "vitest";
import handler from "../../api/og-image";

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
  it("returns png image for GET", () => {
    const { res, getBody, getHeaders } = createResponse();
    handler({ method: "GET" }, res);

    expect(res.statusCode).toBe(200);
    expect(getHeaders()["content-type"]).toBe("image/png");

    const body = getBody();
    expect(body instanceof Buffer).toBe(true);
    expect((body as Buffer).length).toBeGreaterThan(0);
  });

  it("returns headers without body for HEAD", () => {
    const { res, getBody, getHeaders } = createResponse();
    handler({ method: "HEAD" }, res);

    expect(res.statusCode).toBe(200);
    expect(getHeaders()["content-type"]).toBe("image/png");
    expect(getBody()).toBe("");
  });

  it("rejects non-GET methods", () => {
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
