const StudentController = require("../../lib/controller/StudentController")

describe("pruebas de unidad para StudentController", () => {
    test("Requerimiento 1. Consulta de estudiantes", () => {
        const student = [{"name" : "jose"}, {"name" : "luis"}, {"name" : "isac"}];
        const allStudent = StudentController.getStudents(student);
        expect(allStudent[0].name).toBe("jose");
    });
    test("Requerimiento 2. Consulta de emails por certificación", () => {
        const student = [{"name": "jose", "haveCertification": true, "email": "Todd@visualpartnership.xyz"}];
        const studenfilter = StudentController.getstudentFilter(student, true);
        expect(studenfilter[0]).toBe("Todd@visualpartnership.xyz");
    });
});