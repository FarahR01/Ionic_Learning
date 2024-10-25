import { Component, TrackByFunction } from '@angular/core';
import {Course} from '../models/course' ; 
import {ManageCoursesService} from '../manage-courses.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  courses: Course[];
trackByFn: TrackByFunction<Course>;
  constructor(private courseService: ManageCoursesService ) {}

  ngOnInit(): void {

    this.courses = this.courseService.getAllCourses();
  }
}
