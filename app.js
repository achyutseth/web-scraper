
const puppeteer = require('puppeteer');
 
async function webScraper() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
    await page.goto('https://www.1mg.com/all-diseases');
    let element = await page.waitFor("div")
    let text = await page.evaluate(
        element => element.textContent, element)
    console.log(text)
    browser.close()
};
 
webScraper();