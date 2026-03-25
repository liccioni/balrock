import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  testMatch: /base-path\.spec\.js/,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4176/balrock/',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run build:base-path && PORT=4176 node scripts/serve-base-path.mjs',
    url: 'http://127.0.0.1:4176/balrock/',
    reuseExistingServer: false,
  },
  projects: [
    {
      name: 'desktop-chromium-base-path',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
