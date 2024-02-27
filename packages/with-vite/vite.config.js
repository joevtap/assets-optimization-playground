import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpeg: {
          quality: 40,
        },
        jpg: {
          quality: 40,
        },
      }),
    ],
  };
});
