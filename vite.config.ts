import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";

const healthEndpointPlugin = () => {
  const sendHealth = (res: import("http").ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    res.setHeader("cache-control", "no-store");
    res.end(JSON.stringify({ ok: true, ts: new Date().toISOString() }));
  };

  const handler = (
    req: import("http").IncomingMessage,
    res: import("http").ServerResponse
  ) => {
    if (req.method && !["GET", "HEAD"].includes(req.method)) {
      res.statusCode = 405;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
      return;
    }
    sendHealth(res);
  };

  return {
    name: "health-endpoint",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use("/api/health", handler);
    },
    configurePreviewServer(server: import("vite").PreviewServer) {
      server.middlewares.use("/api/health", handler);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    https: true,
  },
  plugins: [
    basicSsl(),
    react(),
    healthEndpointPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
  },
}));
