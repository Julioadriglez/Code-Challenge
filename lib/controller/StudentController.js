const StudentService = require("../../lib/services/StudentService")
const Reader = require("../utils/Reader") 
const students = Reader.readJsonFile("../visualpartners.json");

class StudentController {
    static getStudents(){
        const allStudents = StudentService.students(students);
        return allStudents;
    };
    static getStudentFilter(){
        const allStudent = StudentService.studentFilter(students);
        return allStudent;
    };
    static getStudenFilterCredist(credits){
        const allStudents = StudentService.studenfilterCredist(students, credits);
        return allStudents;
    };
};

module.exports = StudentController;