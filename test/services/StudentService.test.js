const StudentService = require("../../lib/controller/");

describe("Pruebas de unidad para StudentService", () => {
    test('Requerimiento 1. consulta de estudiantes', () => {
        const student = {"name" : "jose", "name" : "luis", "name" : "isac" };
        const studentFilter = StudentController.getStudentFilter(student)
        expect(studentFilter[0]).toBe("jose")
    });
})
