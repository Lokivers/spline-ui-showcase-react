import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  ],
=======
=======
>>>>>>> Stashed changes
    mode === 'development' &&[]
  ].filter(Boolean),
>>>>>>> Stashed changes
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
