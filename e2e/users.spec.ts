import { test, expect } from '@playwright/test'

test('should navigate to the users page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'Users' and click on it
  await page.click('text=Users')
  // The new url should be "/users/clientside" (baseURL is used there)
  await expect(page).toHaveURL('/users/clientside')
  // The new page should contain an h1 with "Here's your list of users"
  await expect(page.locator('h1')).toContainText('Here\'s your list of users')
})
