const StudentService = require("../../lib/services/StudentService");

describe("Pruebas de unidad para StudentService", () => {
    test("Requerimiento 1. Consulta de estudiantes", () => {
        const student = [{"name" : "jose"}, {"name" : "luis"}, {"name" : "isac"}];
        const allStudent = StudentService.students(student);
        expect(allStudent[0].name).toBe("jose");
    });
    test("Requerimiento 2. Consulta de emails por certificación", () => {
        const student = [{"name": "jose", "haveCertification": true, "email": "Todd@visualpartnership.xyz"}];
        const studenfilter = StudentService.studentFilter(student, true);
        expect(studenfilter[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("Requerimiento 3. Consult")
});
