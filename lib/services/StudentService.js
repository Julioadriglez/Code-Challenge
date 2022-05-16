class StudentService{
    static students(students){
        return students;
    };
    static studentFilter(students, certification){
        const studenByCertification = students.filter((alumno) => alumno.haveCertification === certification);
        return studenByCertification;
    };
};

module.exports = StudentService;