import { Student } from "./Student.js";
export class StudentService {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
    getStudents() {
        return this.students;
    }
    searchStudent(id) {
        return this.students.find(student => student.id === id);
    }
    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }
}
//# sourceMappingURL=StudentService.js.map