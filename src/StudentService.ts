import { Student } from "./Student.js";

export class StudentService {

    private students: Student[] = [];

    addStudent(student: Student): void {

        this.students.push(student);

    }

    getStudents(): Student[] {

        return this.students;

    }

    searchStudent(id: number): Student | undefined {

        return this.students.find(student => student.id === id);

    }

    deleteStudent(id: number): void {

        this.students = this.students.filter(student => student.id !== id);

    }

}