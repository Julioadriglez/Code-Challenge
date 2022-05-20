const { TestScheduler } = require("jest");
const StudentController = require("../../lib/controller/StudentController");

describe("Pruebas a StudenController", () => {
    test("Prueba 1. getStudents no regrese Undefined", () => {
        const allStudents = StudentController.getStudents()
        expect(allStudents).not.toBeUndefined();
    });
    test("Prueba 2.getStudentFilter no regrese Undefined", () => {
        const allStudents = StudentController.getStudentFilter();
        expect(allStudents).not.toBeUndefined();
    });

});
