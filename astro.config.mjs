import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://looplab.se",
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
