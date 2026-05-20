import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import {
  getDiagnosticSnapshot,
  subscribeToDiagnostics,
} from "@/lib/diagnostics";
import { fetchWithTimeout } from "@/lib/network";

type FetchTestResult = {
  name: string;
  status: "pending" | "ok" | "error";
  durationMs?: number;
  message?: string;
};

const runFetchTest = async (
  name: string,
  input: RequestInfo | URL,
  init: RequestInit
): Promise<FetchTestResult> => {
  const startedAt = performance.now();
  try {
    const response = await fetchWithTimeout(input, init, 5000);
    const durationMs = Math.round(performance.now() - startedAt);
    return {
      name,
      status: response.ok ? "ok" : "error",
      durationMs,
      message: response.ok
        ? `OK (${response.status})`
        : `HTTP ${response.status}`,
    };
  } catch (error) {
    const durationMs = Math.round(performance.now() - startedAt);
    return {
      name,
      status: "error",
      durationMs,
      message: error instanceof Error ? error.message : "Fetch failed",
    };
  }
};

const useDiagnosticsEvents = () => {
  return useSyncExternalStore(
    subscribeToDiagnostics,
    getDiagnosticSnapshot,
    getDiagnosticSnapshot
  );
};

const Diag = () => {
  const [fetchResults, setFetchResults] = useState<FetchTestResult[]>([{
    name: "API health",
    status: "pending",
  }, {
    name: "Same-origin asset",
    status: "pending",
  }]);
  const diagnostics = useDiagnosticsEvents();

  const connection = useMemo(() => {
    const nav = navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        downlink?: number;
        rtt?: number;
        saveData?: boolean;
      };
    };
    return nav.connection;
  }, []);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      const apiHealth = await runFetchTest("API health", "/api/health", {
        cache: "no-store",
        headers: {
          "cache-control": "no-store",
        },
      });
      const asset = await runFetchTest("Same-origin asset", "/favicon.ico", {
        cache: "no-store",
      });
      if (isMounted) {
        setFetchResults([apiHealth, asset]);
      }
    };
    run();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10 text-slate-900">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Diagnostics</h1>
        <p className="text-sm text-slate-600">
          Hidden diagnostics view for network and error visibility.
        </p>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-700">Client info</h2>
        <dl className="mt-3 space-y-2 text-sm">
          <div>
            <dt className="font-medium text-slate-600">User Agent</dt>
            <dd className="text-slate-900">{navigator.userAgent}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-600">Timestamp</dt>
            <dd className="text-slate-900">{new Date().toISOString()}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-600">Connection</dt>
            <dd className="text-slate-900">
              {connection
                ? `${connection.effectiveType ?? "unknown"}, downlink ${
                    connection.downlink ?? "n/a"
                  }, rtt ${connection.rtt ?? "n/a"}, saveData ${
                    connection.saveData ? "on" : "off"
                  }`
                : "Not available"}
            </dd>
          </div>
        </dl>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-700">Fetch checks</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {fetchResults.map((result) => (
            <li
              key={result.name}
              className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
            >
              <div>
                <p className="font-medium text-slate-800">{result.name}</p>
                <p className="text-xs text-slate-500">
                  {result.durationMs !== undefined
                    ? `${result.durationMs}ms`
                    : "Running"}
                </p>
              </div>
              <span
                className={
                  result.status === "ok"
                    ? "text-emerald-600"
                    : result.status === "error"
                      ? "text-rose-600"
                      : "text-slate-500"
                }
              >
                {result.status === "pending" ? "Pending" : result.message}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-700">Recent errors</h2>
        {diagnostics.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            No captured errors yet.
          </p>
        ) : (
          <ul className="mt-3 space-y-3 text-sm">
            {diagnostics.map((event) => (
              <li
                key={event.id}
                className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <p className="font-medium text-slate-800">
                  {new Date(event.timestamp).toISOString()} · {event.type}
                </p>
                <p className="text-slate-700">{event.message}</p>
                {event.details ? (
                  <pre className="mt-2 whitespace-pre-wrap text-xs text-slate-500">
                    {JSON.stringify(event.details, null, 2)}
                  </pre>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Diag;
