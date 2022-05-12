const Reader = require("")

class StudentController {
    static getStudentFilter(student){
        const file = Reader.resdJasonFile("visualparthners.json");
        const allStudents = StudentService.studentFilter(file, student);
        return allStudents;
    }
}

module.exports = Reader;