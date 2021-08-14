import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private students: Student[] = [];
  private studentsUpdated = new Subject<Student[]>();

  getStudents() {
    //Gets the objects
    return [...this.students];
  }
  getStudentsUpdateListener() {
    //Listens to the event
    return this.studentsUpdated.asObservable();
  }
  addStudent(name: string, id: string, grade: number) {
    const student: Student = { name: name, id: id, grade: grade };
    //Update posts
    this.students.push(student);

    //Take the subject, the emit is here!
    this.studentsUpdated.next([...this.students]);
  }
}
