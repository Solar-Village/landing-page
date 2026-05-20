import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { readFileSync } from "node:fs";
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

const ogImageEndpointPlugin = () => {
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

    res.statusCode = 200;
    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=3600");

    if (req.method === "HEAD") {
      res.end();
      return;
    }

    const imagePath =
      process.env.OG_IMAGE_PATH ??
      path.resolve(__dirname, "src", "assets", "solar-village-preview.png");
    res.end(readFileSync(imagePath));
  };

  return {
    name: "og-image-endpoint",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use("/api/og-image", handler);
    },
    configurePreviewServer(server: import("vite").PreviewServer) {
      server.middlewares.use("/api/og-image", handler);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), healthEndpointPlugin(), ogImageEndpointPlugin()].filter(Boolean),
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
