const { validateInput } = require('../src/util');;

describe("Tests suite for utilites", () => {
    it("1. Validating form", () => {
        const validation = validateInput("sasa", false, false);
        expect(validation).toBeTruthy();
    })
});