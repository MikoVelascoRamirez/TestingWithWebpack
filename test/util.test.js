const puppeteer = require('puppeteer');
const { validateInput, generateText, checkAndGenerate } = require('../src/util');

describe("Tests suite for utilites", () => {
    it("1. Validating form", () => {
        const validation = validateInput("sasa", false, false);
        expect(validation).toBeTruthy();
    })

    it("2. Generating text", () => {
        const generatedText = generateText("Miko", 27);
        expect(generatedText).toBe('Miko (27 years old)')
    });

    it("3. Generating a valid text output", () => {
        const validOutput = checkAndGenerate("Felicia", "36");
        expect(validOutput).not.toBeFalsy();
        expect(validOutput).toBe('Felicia (36 years old)');
    })

    it("4. Testing Puppeteer", async () => {
        const browser = await puppeteer.launch({
            args: ['--window-size=1280,1024'],
            headless: true,
            slowMo: 80
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:8080');

        await page.click('input#inpName')
        await page.type('input#inpName', 'Miko', {delay: 100});
        await page.click('input#inpAge')
        await page.type('input#inpAge', '32', {delay: 100});
        await page.click('input[type=submit]');

        const result = await page.$eval('.item-name-list', item => item.textContent);

        expect(result).toBe("Miko (32 years old)");

        //await page.waitForNavigation();
        //await page.screenshot({path: 'example.png'})
        //await browser.close();
    }, 100000)

    it("5. Throwing invalid input", () => {
        const validateInput = checkAndGenerate("12323", "dsasda");
        expect(validateInput).toBeFalsy();
    })
});