import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0F172A",
        muted: "#475569",
        line: "#E2E8F0",
        trust: "#10B981",
        urgent: "#F59E0B",
        service: {
          blue: "#2563EB",
          blueHover: "#1D4ED8",
          blueSoft: "#DBEAFE",
          blueText: "#1E40AF",
          surface: "#F8FAFC",
          alt: "#EFF6FF"
        }
      },
      boxShadow: {
        service: "0 18px 45px rgba(15, 23, 42, 0.08)",
        soft: "0 10px 30px rgba(37, 99, 235, 0.12)"
      },
      fontFamily: {
        sans: [
          "Segoe UI Variable",
          "Segoe UI",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
