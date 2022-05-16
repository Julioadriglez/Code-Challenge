const { TestScheduler } = require("jest")
const StudentController = require("../../lib/controller/StudentController")

describe("pruebas de unidad para StudentController", () => {
    test("Requerimiento 1. Consulta de estudiantes", () => {
        const student = [{"name" : "jose"}, {"name" : "luis"}, {"name" : "isac"}];
        const allStudent = StudentController.getStudents(student);
        expect(allStudent[0].name).toBe("jose");
})