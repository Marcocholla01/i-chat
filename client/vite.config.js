import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], //, pluginRewriteAll()
  server: {
    // port: 4000,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:5000",
    //   },
    //},
  },
});
