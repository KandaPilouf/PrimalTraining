import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, "/Users/samikhan/Library/Application Support/mkcert/rootCA-key.pem")
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, "/Users/samikhan/Library/Application Support/mkcert/rootCA.pem")
      ),
    },
    host: "0.0.0.0",
  },
  base: "/PrimalTraining",
});
