import * as Sentry from "@sentry/react";

export type DiagnosticEvent = {
  id: string;
  type: "error" | "unhandledrejection" | "fetch_error" | "fetch_non_ok";
  message: string;
  timestamp: number;
  details?: Record<string, unknown>;
};

const events: DiagnosticEvent[] = [];
let snapshot: DiagnosticEvent[] = [];
const subscribers = new Set<() => void>();
const maxEvents = 50;
let fetchWrapped = false;
let handlersInstalled = false;

const notifySubscribers = () => {
  subscribers.forEach((callback) => callback());
};

export const addDiagnosticEvent = (event: Omit<DiagnosticEvent, "id">) => {
  const id = globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const entry: DiagnosticEvent = {
    ...event,
    id,
  };
  events.unshift(entry);
  if (events.length > maxEvents) {
    events.splice(maxEvents);
  }
  snapshot = [...events];
  notifySubscribers();
};

export const getDiagnosticSnapshot = () => snapshot;

export const subscribeToDiagnostics = (callback: () => void) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

const captureWithSentry = (event: DiagnosticEvent, error?: unknown) => {
  Sentry.captureException(error ?? new Error(event.message), {
    extra: event.details,
    tags: {
      type: event.type,
    },
  });
};

export const installDiagnosticsHandlers = () => {
  if (handlersInstalled) {
    return;
  }
  handlersInstalled = true;

  window.addEventListener("error", (event) => {
    const entry = {
      type: "error" as const,
      message: event.message,
      timestamp: Date.now(),
      details: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      },
    };
    addDiagnosticEvent(entry);
    captureWithSentry(entry, event.error);
  });

  window.addEventListener("unhandledrejection", (event) => {
    const entry = {
      type: "unhandledrejection" as const,
      message: event.reason?.message ?? "Unhandled promise rejection",
      timestamp: Date.now(),
      details: {
        reason: event.reason,
      },
    };
    addDiagnosticEvent(entry);
    captureWithSentry(entry, event.reason);
  });
};

export const installFetchDiagnostics = () => {
  if (fetchWrapped || typeof window.fetch !== "function") {
    return;
  }
  fetchWrapped = true;

  const originalFetch = window.fetch.bind(window);
  window.fetch = async (...args) => {
    try {
      const response = await originalFetch(...args);
      if (!response.ok) {
        const entry = {
          type: "fetch_non_ok" as const,
          message: `Fetch returned ${response.status} for ${String(args[0])}`,
          timestamp: Date.now(),
          details: {
            status: response.status,
            statusText: response.statusText,
            url: String(args[0]),
          },
        };
        addDiagnosticEvent(entry);
        captureWithSentry(entry);
      }
      return response;
    } catch (error) {
      const entry = {
        type: "fetch_error" as const,
        message: `Fetch failed for ${String(args[0])}`,
        timestamp: Date.now(),
        details: {
          url: String(args[0]),
          error,
        },
      };
      addDiagnosticEvent(entry);
      captureWithSentry(entry, error);
      throw error;
    }
  };
};
