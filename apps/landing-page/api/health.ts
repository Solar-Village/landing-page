type HealthResponse = {
  ok: true;
  ts: string;
};

type ApiResponse = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: string) => void;
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

  const payload: HealthResponse = { ok: true, ts: new Date().toISOString() };
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify(payload));
};

export default handler;
