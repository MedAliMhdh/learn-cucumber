const { Given, When, Then } = require('@cucumber/cucumber')

Given('I am on the {string} page', function (string) {
    return this.page.goto(`http://localhost:3000/blogs/${string}`)
})

Given('I enter {string} as {string}', async function (string, string2) {
    const el = await this.page.$(`[data-test="${string2}"]`)
    await el.type(string)
    return el

})


When('I click {string} button', async function (string) {
    const el = await this.page.$(`[data-test="${string}"]`)
    await el.click()
    return el

})

Then('I should be on the {string} page and the blog to have {string} title', async function (string, string2) {
    console.log(string)
    const page = await this.page.waitForSelector(`[data-test="${string}"]`)
    const blogTitle = await this.page.waitForSelector(`[data-test="text-title"]`)
    let value = await blogTitle.evaluate(el => el.textContent)
    return !!page && value === string2
})


