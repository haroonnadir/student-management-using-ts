import { Student } from "./Student.js";
import { StudentService } from "./StudentService.js";

const service = new StudentService();

service.addStudent(
    new Student(1, "Ali", 22, "Computer Science")
);

service.addStudent(
    new Student(2, "Ahmed", 21, "Software Engineering")
);

console.log("All Students:");
console.log(service.getStudents());

console.log("Search:");
console.log(service.searchStudent(2));

service.deleteStudent(1);

console.log("After Delete:");
console.log(service.getStudents());