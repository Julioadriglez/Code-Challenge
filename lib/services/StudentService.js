class StudentService{
    static students(file){
        return file
    };
    static studentsFilter(file, certification){
        const studenByCertification = file.filter((alumno) => alumno.haveCertification === certification);
        return studenByCertification;
    }
}

const  student = {"name": "jose", "haveCertification": true};
const studenfilter = StudentService.studentsFilter(student, true)
console.log(studenfilter)
module.exports = StudentService;