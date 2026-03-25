import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

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

test('renders the landing page with hero, concerts, and primary CTA', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: '"Corred Insensatos..."' }),
  ).toBeVisible()
  await expect(page.getByText('Desatando la furia del inframundo.')).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Contrata Balrock en Gigstarter' }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Próximos Conciertos' }),
  ).toBeVisible()
  await expect(page.getByText('17 de Abril, 2026')).toBeVisible()
  await expect(page.getByText('Barcelona, España - Bar Ceferino')).toBeVisible()

  await expect(
    page.getByRole('link', { name: 'Facebook de Balrock' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Instagram de Balrock' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Canal de YouTube de Balrock' }),
  ).toBeVisible()
  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('contentinfo')).toBeVisible()
  await expect(
    page.getByRole('navigation', { name: 'Redes sociales de Balrock' }),
  ).toBeVisible()
})

test('uses the mobile hero background and keeps the CTA visible', async ({ page }) => {
  const viewportSize = page.viewportSize()
  test.skip(!viewportSize || viewportSize.width > 767, 'mobile-only smoke')

  await page.goto('/')

  await expect(page.getByTestId('hero-banner')).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Contrata Balrock en Gigstarter' }),
  ).toBeVisible()

  const heroBackgroundImage = await page.getByTestId('hero-banner').evaluate((element) => {
    return window.getComputedStyle(element).backgroundImage
  })

  expect(heroBackgroundImage).toContain('banner-mobile.png')
})

test('passes an automated accessibility scan on the landing page', async ({ page }) => {
  await page.goto('/')

  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(['color-contrast'])
    .analyze()

  expect(accessibilityScanResults.violations).toEqual([])
})
