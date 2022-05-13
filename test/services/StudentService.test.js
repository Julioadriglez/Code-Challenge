const StudentService = require("../../lib/services/StudentService");

describe("Pruebas de unidad para StudentService", () => {
    test('Requerimiento 1. consulta de estudiantes', () => {
        const student = [{"name" : "jose"}, {"name" : "luis"}, {"name" : "isac"}];
        const studentFilter = StudentService.students(student)
        expect(studentFilter[0].name).toBe("jose")
    });
})
