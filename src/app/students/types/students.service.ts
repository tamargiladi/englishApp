import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private students: Student[] = [];
  private studentsUpdated;
  //222
  getStudents(): Student[] {
    //Gets the objects
    return [...this.students];
  }
  getStudentsUpdateListener(): Observable<Student[]> {
    //Listens to the event, the Subject
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
