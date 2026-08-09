// Standalone static build config — used ONLY for GitHub Pages deployment.
// This deliberately bypasses @lovable.dev/vite-tanstack-config and the entire
// Nitro/SSR pipeline, producing a pure client-side SPA bundle in ./dist.
//
// The Lovable dev experience (vite.config.ts + TanStack Start) is unchanged.
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Route file discovery — must come before React plugin
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
