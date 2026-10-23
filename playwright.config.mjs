import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "tests",
  testMatch: "*.spec.mjs",
  use: { baseURL: process.env.BASE_URL || "http://localhost:8088" },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "phone", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } } },
  ],
});
