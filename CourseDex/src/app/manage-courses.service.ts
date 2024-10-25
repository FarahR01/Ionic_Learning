import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root' // service = Root Level = singleton + available throughout the app.
})
export class ManageCoursesService {

  private allCourses: Course[] = [
    new Course(
      1,
      'Angular',
      'Nidhal Jelassi',
      'https://cdn.iconscout.com/icon/premium/png-256-thumb/angular-2752246-2285063.png',
      ['components', 'services', 'pipes']
    ),
    new Course(
      2,
      'Android',
      'Alaa Bejaoui',
      'https://cdn-icons-png.flaticon.com/256/732/732179.png',
      ['activtiy', 'XML', 'Layout']
    ),
    new Course(
      3,
      'Ionic',
      'Seif Bahri',
      'https://cdn.iconscout.com/icon/free/png-256/free-ionic-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-1-pack-logos-icons-3029993.png',
      ['page', 'mobile', 'hybrid']
    ),
    new Course(
      4,
      'React',
      'Farah Rihane',
      'https://cdn-icons-png.flaticon.com/256/919/919851.png',
      ['hooks', 'state management', 'jsx']
    ),
    new Course(
      5,
      'Docker',
      'Nada Boulares',
      'https://cdn-icons-png.flaticon.com/256/919/919830.png',
      ['containers', 'commands', 'Dockerfile']
    ),
  ];

    //DELETE :  Method to delete a course by ID

  deleteCourse(id) {
    // findIndex  => index of the first element in the array with the given id
    let index = this.allCourses.findIndex((c) => c.id == id);
    this.allCourses.splice(index, 1); // i, i+1, i+2
  }
  //GET : Method to retrieve a course by its ID

  getCourseById(id) {
       // find => First element in an Array ! with the matching ID
    return this.allCourses.find((c) => c.id == id);
  }

  addCourse(newCourse) {
    newCourse.id = this.allCourses[this.allCourses.length - 1].id + 1; // ID of last course + 1
     // keywords string -->  array of strings
    newCourse.keywords = newCourse.keywords.split(',');
    this.allCourses.push(newCourse);
  }

  //GET ALL :  Method to retrieve all courses
  getAllCourses() {
    return this.allCourses;
  }
  constructor() {}
}