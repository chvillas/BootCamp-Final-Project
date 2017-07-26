import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sort } from '@angular/material';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;
  view: boolean = false;

  constructor(
    private studentService: StudentService,
    private router: Router) {
  }

  toggleView(){
    this.view = !this.view; 
  }

  sortData(sort: Sort) {
    const data = this.students.slice();
    if (!sort.active || sort.direction == '') {
      this.students = data;
      return;
    }

    this.students = data.sort((a, b) => {
      /**/let isAsc = sort.direction == 'asc';
      /**/switch (sort.active) {
        /**/case 'id': return compare(a.id, b.id, isAsc);
        /**/case 'name': return compare(a.name, b.name, isAsc);
        /**/case 'averageGrade': return compare(+a.averageGrade, +b.averageGrade, isAsc);
        /**/case 'deliveredHomeworks': return compare(+a.deliveredHomeworks, +b.deliveredHomeworks, isAsc);
        /**/case 'missingHomeworks': return compare(+a.missingHomeworks, +b.missingHomeworks, isAsc);
        /**/case 'updated': return compare(+a.updated, +b.updated, isAsc);
        /**/default: return 0;
        /**/
}
    });
  }


  getStudents(): void {
    this.studentService
      .getStudents()
      .then(students => {
        this.students = students;
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.create(name)
      .then(student => {
        this.students.push(student);
        this.selectedStudent = null;
      });
  }

  delete(student: Student): void {
    this.studentService
      .delete(student.id)
      .then(() => {
        this.students = this.students.filter(s => s !== student);
        if (this.selectedStudent === student) { this.selectedStudent = null; }
      });
  }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



