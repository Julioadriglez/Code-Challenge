const StudentService = require("../../lib/services/StudentService")
const Reader = require("") 
const students = Reader.resdJasonFile("visualparthners.json");

class StudentController {
    static getStudents(students){
        const allStudents = StudentService.students(students);
        return allStudents;
    };
    static getStudentFilter(certification){
        const allStudents = StudentService.studentFilter(students, certification);
        return allStudents;
    };
};

module.exports = StudentController;