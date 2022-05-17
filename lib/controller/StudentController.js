const StudentService = require("../../lib/services/StudentService")
const Reader = require("../utils/Reader") 
const students = Reader.readJsonFile("../../visualpartners.json");

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