const express = require("express");
const StudentController = require("./controller/StudentController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Bienvenido a la API de Visual Partner-Ship"});
});

app.get("/v1/allStudents", (req, res) => {
    const allStudents= StudentController.getStudents();
    res.json(allStudents)
})

app.listen(port, () => {
    console.log(`API de Visual Partner-Ship en localhost:${port}`) 
});