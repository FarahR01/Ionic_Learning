import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ManageCoursesService} from '../manage-courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  constructor(
    private courseService: ManageCoursesService,
    private router: Router
  ) {}
  
  ngOnInit() {
        // Clear the form on component initialization
        this.resetForm();
  }
  // Handles form submission, adds a new course, and navigates to the home page
  onSubmit(formValue, form: any) {
    this.courseService.addCourse(formValue);
    this.router.navigateByUrl('/home');
    form.reset();
  }
// Method to reset form fields on initialization
resetForm() {
  setTimeout(() => {
    document.querySelectorAll('ion-input').forEach(input => input.value = '');
  });
}
}
