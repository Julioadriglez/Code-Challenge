class StudentService{
    static students(students){
        return students;
    };
    static studentFilter(students, certification){
        const studenByCertification = students.filter((alumno) => alumno.haveCertification === certification);
        const allStudent = studenByCertification.map((alumno) => alumno.email);
        return allStudent;
    };
    static studenfilterCredist(students,credit){
        const studenCredist = students.filter((alumno) => alumno.credits > credit);
        return studenCredist;
    }
};

module.exports = StudentService;