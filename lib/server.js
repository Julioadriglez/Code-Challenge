const express = require("express");
const { redirect } = require("express/lib/response");
const StudentController = require("./controller/StudentController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Bienvenido a la API de Visual Partner-Ship"});
});

app.get('/v1/allStudents', (req, res) => {
    const allStudents = StudentController.getStudents();
    res.json(allStudents);
});
app.get('/v1/studentCertification/email', (req, res) => {
    
    const allStudents = StudentController.getStudentFilter();
    res.json(allStudents);
});
app.get('/v1/studentFilter/:credits', (req, res) => {
    const credits = req.params.credits;
    const allStudents = StudentController.getStudenFilterCredist(credits);
    res.json(allStudents);
});

app.listen(port, () => {
    console.log(`API de Visual Partner-Ship en localhost:${port}`) 
});