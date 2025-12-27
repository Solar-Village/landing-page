import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { addDiagnosticEvent } from "@/lib/diagnostics";
import { fetchWithRetry } from "@/lib/network";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diag from "./pages/Diag";
import Index from "./pages/Index";
import Pitch from "./pages/Pitch";
import NotFound from "./pages/NotFound";
import Whitepaper from "./pages/Whitepaper";
import Financials from "./pages/Financials";

const queryClient = new QueryClient();

const Analytics = lazy(() =>
  import("@vercel/analytics/react").then((module) => ({
    default: module.Analytics,
  }))
);

const App = () => {
  const [bootError, setBootError] = useState<string | null>(null);
  const [bootChecking, setBootChecking] = useState(false);

  const alternateHostUrl = useMemo(() => {
    const { protocol, hostname, pathname, search, hash } = window.location;
    const nextHost = hostname.startsWith("www.")
      ? hostname.replace(/^www\\./, "")
      : `www.${hostname}`;
    return `${protocol}//${nextHost}${pathname}${search}${hash}`;
  }, []);

  const runBootCheck = useCallback(async () => {
    setBootChecking(true);
    setBootError(null);
    try {
      const response = await fetchWithRetry(
        "/api/health",
        {
          cache: "no-store",
          headers: {
            "cache-control": "no-store",
          },
        },
        { timeoutMs: 5000, retries: 1, retryDelayMs: 500 }
      );
      if (!response.ok) {
        throw new Error(`Health check failed with ${response.status}`);
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to reach the health endpoint.";
      setBootError(message);
      addDiagnosticEvent({
        type: "fetch_error",
        message: `Boot health check failed: ${message}`,
        timestamp: Date.now(),
      });
    } finally {
      setBootChecking(false);
    }
  }, []);

  useEffect(() => {
    runBootCheck();
  }, [runBootCheck]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {bootError ? (
          <div className="bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">
                  We are having trouble loading data.
                </p>
                <p>
                  {bootError}{" "}
                  <span className="text-amber-800">
                    Try switching hosts:{" "}
                    <a
                      className="underline"
                      href={alternateHostUrl}
                      rel="noreferrer"
                    >
                      {alternateHostUrl}
                    </a>
                  </span>
                </p>
              </div>
              <button
                className="inline-flex items-center justify-center rounded-md border border-amber-200 bg-white px-3 py-1 text-sm font-medium text-amber-900 shadow-sm transition hover:bg-amber-100"
                onClick={runBootCheck}
                type="button"
              >
                {bootChecking ? "Retrying..." : "Retry"}
              </button>
            </div>
          </div>
        ) : null}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pitch" element={<Pitch />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/diag" element={<Diag />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
