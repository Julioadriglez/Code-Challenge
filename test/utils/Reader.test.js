
const Reader = require("../../lib/utils/Reader");

describe("Prueba a Reader ", () => {
    test("no regrese Undefined", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        expect(students).not.toBeUndefined();
    });
});