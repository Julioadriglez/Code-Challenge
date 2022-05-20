const { TestScheduler } = require("jest");
const StudentController = require("../../lib/controller/StudentController");

describe("Pruebas a StudenController", () => {
    test("getStudents no regrese Undefined", () => {
        const allStudents = StudentController.getStudents()
        expect(allStudents).not.toBeUndefined();
    });
});
