const { validateInput, generateText } = require('../src/util');;

describe("Tests suite for utilites", () => {
    it("1. Validating form", () => {
        const validation = validateInput("sasa", false, false);
        expect(validation).toBeTruthy();
    })

    it("2. Generating text", () => {
        const generatedText = generateText("Miko", 27);
        expect(generatedText).toBe('Miko (27 years old)')
    });
});