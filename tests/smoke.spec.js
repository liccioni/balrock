import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page, baseURL }) => {
  await page.route('**/*', (route) => {
    const url = route.request().url()

    // Keep the smoke test deterministic by allowing only the local preview app.
    if (baseURL && url.startsWith(baseURL)) {
      return route.continue()
    }

    return route.abort()
  })
})

test('renders the landing page and current concert details', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: '"Corred Insensatos..."' }),
  ).toBeVisible()
  await expect(page.getByText('Desatando la furia del inframundo.')).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Próximos Conciertos' }),
  ).toBeVisible()
  await expect(page.getByText('17 de Abril, 2026')).toBeVisible()
  await expect(page.getByText('Barcelona, España - Bar Ceferino')).toBeVisible()

  await expect(
    page.locator('a[href="https://www.facebook.com/balrockband"]'),
  ).toBeVisible()
})
