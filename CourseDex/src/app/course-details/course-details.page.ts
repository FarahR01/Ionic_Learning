import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course' ; 
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import {ManageCoursesService} from '../manage-courses.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {

  selectedCourse: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService:ManageCoursesService ,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    const course = this.courseService.getCourseById(courseId);
    if (course) {
      this.selectedCourse = course;
    } else {
      // Handle the case where the course is not found
      this.router.navigate(['/home']);
    }
  }
  trackByFn(index, item) {
    return item;
  }
  
  // 
  /**
   * Presents an alert to confirm the deletion of a course.
   * 
   * @returns {Promise<void>} A promise that resolves when the alert is presented.
   */
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this course?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.courseService.deleteCourse(this.selectedCourse.id);
            this.router.navigate(['/home']);
          },
        },
        'No',
      ],
    });

    await alert.present();
  }
}
