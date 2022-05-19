# Code-Challenge

Semana 4 de LaunchX-InnovaccionVirtual Mission NodeJS: Code Challenge

## Dependencias que se usaron.

Para la realización de este proyecto se utilizó varias dependencias esenciales para el funcionamiento de Código.

* `Jest`: Se utilizo para hacer pruebas de unidad, se instaló la vercion  26.0.0 porque la versión más reciente no es compatible con `github actions`
* `express`: Con esta dependencia la utilizamos para poder crear el servidor.
* `eslint`: Para la corrección de inconsistencias del código.

Tambien se utilizó la herramienta `git` para versionar el proyecto y `GitHub Actions` para automatizar las pruebas de unidad cuando se realice un push al repositorio.

## Diseño de componentes.

### Diagrama

![](image/README/1652997828113.png)

### Descripción del programa

El programa es una Api que muestra todos los estudiantes de `visualpartners.json` de una base de datos, también muestra el email de todos los que tienen certificación `haveCertification` y finalmente muestra a todo los alumnos que tengan los créditos mayores a los proporcionados por el usuario.

`StudentService.js` este archivo que está dentro de la carpeta `services` están los métodos que contienen la lógica de la aplicación, a qui se encuentra la clase ` class StudenService`, en ella hay tres métodos.

![](image/README/1652997921590.png)

* En el primer método `students(students)` que nos muestra toda la lista de estudiantes y solo recibe el parámetro `students` que es la base de datos de los alumnos que vienen del archivo `visualpartners.json`.
* El segundo método es `studentFilter(students)` aquí se hace le filtrado de los alumnos que tengan `haveCertification` en   `true` y solo se filtran sus emails.
* Finalmente, el método `studenfilterCredist(students,credit)` muestra a los alumnos que tengan los créditos mayor a los asignados por el usuario y en parámetro `credit` se manda la cantidad de créditos que deben tener los alumnos.

`StudentController.js` este archivo es un puente entre `StudentService.js` y `server.js`.

![StudentController](https://user-images.githubusercontent.com/99068430/169420906-cdb891c9-dff1-4c35-af95-5b2b69d3aa61.png)

`Reader.js` Es un archivo de utilidad lee la bases de datos ` visualpartners.json`.

![Reader](https://user-images.githubusercontent.com/99068430/169420930-5a6db32f-1b7d-406f-987f-b8d0eb77c29f.png)

`server.js` contiene los endpoints y las rutas de las Apis que se mostraran en la pagina web consultada por los usuarios.

![server](https://user-images.githubusercontent.com/99068430/169420942-a6a9bc63-a47d-4cd9-b1fd-5ef435ce5281.png)

`StudentService.test.js` Contiene las pruebas de unidad de los metodos de la clase `class StudentServer`

![StudentServicetest](https://user-images.githubusercontent.com/99068430/169421234-9f2d33e4-dc73-4185-b9c3-20fbf60bcab8.png)

## API

### Consultas 

Para hace consultas en la api ingresamos a la dirección `http://localhost:3000/` y nos darala la bienvenida.

![serverBienvenida](https://user-images.githubusercontent.com/99068430/169420964-d24937da-1689-49ae-9985-b04013654f66.gif)

 Para ver todos los estudiantes de Visual Partners entramos en `http://localhost:3000/v1/allStudents`.

![serverTodosAlumnos](https://user-images.githubusercontent.com/99068430/169420995-7cf38334-5eb0-43e3-94f1-4c1c4c1cad5e.gif)

 Paara ver a todos los emails de estudiantes que tienen certificación `http://localhost:3000/v1/studentCertification/email`

![serverEmails](https://user-images.githubusercontent.com/99068430/169421024-e602e382-577e-46a0-88d1-6f18fda38b3f.gif)

 Y por ultimo para ver a los estudiantes con mayor creditos dados entramos con  `http://localhost:3000/v1/studentFilter/:credits` donde `: credits` es donde se asignara el valor a buscar por ejemplo  `http://localhost:3000/v1/studentFilter/500` nostrara a los alunmos moyores a 500.
 
![serverAlumnosCreditos](https://user-images.githubusercontent.com/99068430/169421077-e7c2ccc3-bc8e-4959-a6ae-33b32ce052d9.gif)
