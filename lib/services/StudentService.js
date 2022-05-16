class StudentService{
    static students(students){
        return students;
    };
    static studentFilter(students, certification){
        const studenByCertification = students.filter((alumno) => alumno.haveCertification === certification);
        const allStudent = studenByCertification.map((alumno) => alumno.email);
        return allStudent;
    };
};

module.exports = StudentService;