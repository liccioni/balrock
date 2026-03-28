import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page, baseURL }) => {
  await page.route('**/*', (route) => {
    const url = route.request().url()

    if (baseURL && url.startsWith(baseURL)) {
      return route.continue()
    }

    return route.abort()
  })
})

test('renders under a non-root base path and resolves hero assets correctly', async ({ page }) => {
  await page.goto('./')

  await expect(page.getByTestId('hero-banner')).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Ver directo' }),
  ).toBeVisible()

  const heroBackgroundImage = await page.getByTestId('hero-banner').evaluate((element) => {
    return window.getComputedStyle(element).backgroundImage
  })

  expect(heroBackgroundImage).toContain('/balrock/images/balrock.jpeg')
})
