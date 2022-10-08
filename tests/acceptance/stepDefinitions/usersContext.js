const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.main-page'
const userItem = 'li >> nth=0';

Given('a user has navigated to the users page', async function () {
    // navigate to the app
    await page.goto(url)
    // locate the element in the webUI
    const locator = await page.locator(homepageElement)
    // assert that it's visible
    await expect(locator).toBeVisible()
})

When('the user clicks the {string} link',async function (item) {
    // click the button
    await page.click(`text=${item}`)
})

Then('the name {string} should be displayed',async function (item) {
    // get text of the item that is visible in the UI
    const text = await page.locator(userItem).innerText()
    // assert that its name is similar to what we provided
    await expect(text).toBe(item)
})