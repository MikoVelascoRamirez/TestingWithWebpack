const { validateInput, generateText, checkAndGenerate } = require('../src/util');;

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
        const validOutput = checkAndGenerate("Felicia", 36);
        expect(validOutput).not.toBeFalsy();
        expect(validOutput).toBe('Felicia (36 years old)');
    })
});