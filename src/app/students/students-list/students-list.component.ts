import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentsService } from '../students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
})
export class StudentsListComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  private studentsSub: Subscription;

  constructor(public studentsService: StudentsService) {}

  ngOnInit() {
    this.students = this.studentsService.getStudents();
    //Listen to an event
    this.studentsService
      .getStudentsUpdateListener()
      .subscribe((students: Student[]) => {
        //We recevied the students array, therefore an update is being performed due to changes.
        this.students = students;
      });
  }
  ngOnDestroy(): void {
    //Remove subsribtion and prevent memory leak.
    this.studentsSub.unsubscribe();
  }
}
