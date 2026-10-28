import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: { night: "#1b0f2e", plum: "#3a1c5c", flame: "#ffb547", rose: "#ff6f91", mint: "#7ee8c7", cream: "#fff3e0" },
      fontFamily: { display: ["var(--font-fraunces)", "serif"], body: ["var(--font-manrope)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
