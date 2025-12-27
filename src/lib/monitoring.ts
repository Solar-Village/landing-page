import * as Sentry from "@sentry/react";
import {
  installDiagnosticsHandlers,
  installFetchDiagnostics,
} from "./diagnostics";

export const initMonitoring = () => {
  const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;
  if (dsn) {
    Sentry.init({
      dsn,
      tracesSampleRate: 0.1,
    });
  }

  installDiagnosticsHandlers();
  installFetchDiagnostics();
};
