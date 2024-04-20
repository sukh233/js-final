


import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] | undefined; // Array to store the students
  currentStudent: any = {}; // Object to hold the current student being edited
  showForm: boolean = false; // Flag to control the visibility of the form

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  editStudent(student: any) {
    this.currentStudent = { ...student };
    this.showForm = true;
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }

  createStudent() {
    this.currentStudent = {};
    this.showForm = true;
  }

  saveStudent() {
    if (this.currentStudent.id) {
      // Update existing student
      this.studentService.updateStudent(this.currentStudent.id, this.currentStudent).subscribe(() => {
        this.showForm = false;
        this.getStudents();
      });
    } else {
      // Create new student
      this.studentService.createStudent(this.currentStudent).subscribe(() => {
        this.showForm = false;
        this.getStudents();
      });
    }
  }

  cancelEdit() {
    this.currentStudent = {};
    this.showForm = false;
  }
}