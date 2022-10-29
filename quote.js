const puppeteer = require('puppeteer');

const quoteController = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://quotes.toscrape.com')

    const quote = await page.evaluate(() => {
        const test = document.querySelectorAll('.quote');
        let quotesArr = [];

        test.forEach((quote) => {
            const quoteInfo = quote.querySelectorAll("span")
            const actualQuote = quoteInfo[0]
            const actualAuthor = quoteInfo[1]

            quotesArr.push({quote: actualQuote.innerText, author: actualAuthor.innerText})

        })

        return quotesArr
    })

    await browser.close()

    return quote
};

module.exports = quoteController
