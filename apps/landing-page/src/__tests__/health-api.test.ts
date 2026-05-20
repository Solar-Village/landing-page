import { describe, expect, it } from 'vitest';
import handler from '../../api/health';

const createResponse = () => {
  let body = "";
  const headers: Record<string, string> = {};
  return {
    res: {
      statusCode: 0,
      setHeader: (name: string, value: string) => {
        headers[name] = value;
      },
      end: (chunk?: string) => {
        if (chunk) {
          body += chunk;
        }
      },
    },
    getBody: () => body,
    getHeaders: () => headers,
  };
};

describe("health api", () => {
  it("returns ok payload for GET", () => {
    const { res, getBody, getHeaders } = createResponse();
    handler({ method: 'GET' }, res);

    expect(res.statusCode).toBe(200);
    expect(getHeaders()['content-type']).toBe('application/json');

    const payload = JSON.parse(getBody());
    expect(payload.ok).toBe(true);
    expect(typeof payload.ts).toBe("string");
  });

  it("rejects non-GET methods", () => {
    const { res, getBody } = createResponse();
    handler({ method: 'POST' }, res);

    expect(res.statusCode).toBe(405);
    expect(JSON.parse(getBody())).toEqual({
      ok: false,
      error: 'Method not allowed',
    });
  });
});
