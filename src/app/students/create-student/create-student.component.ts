import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../students.service';

/*
1. Services don't need to be imported in app.module.ts
*/

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
})
export class CreateStudentComponent {
  private enteredName = '';
  private enteredID = '';
  private enteredGrade = 0;

  //TODO: What is this?
  constructor(public studentsService: StudentsService) {}

  /*
  1. NgForm needs to be implemented in the html file as well.
  */
  onCreateStudent(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.studentsService.addStudent(
      form.value.name,
      form.value.ID,
      form.value.grade
    );
    form.resetForm();
  }
}
