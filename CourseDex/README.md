# CourseDex

## Introduction

CourseDex is a simple yet powerful Ionic and Angular-based application that manages a catalog of courses. It allows users to view a list of available courses, see details for each course, and add new courses. The application demonstrates various concepts in Ionic and Angular, such as UI components, data bindings, directives, services, dependency injection, and forms.

## Ionic with Angular

Ionic combined with Angular offers a seamless way to create responsive, cross-platform applications. Angular's powerful framework allows for a highly organized code structure, while Ionic provides mobile-ready UI components that streamline the app's design and usability.

## Interfaces

### Add Course

Allows users to add a new course with details like title, author, image URL, and keywords.

![Add Course](./assets/add-course.png)

### Course Added

Displays the course on the home page after it has been added.

![Course Added](./assets/added-course.png)

### Home

Shows the catalog of all available courses, each with an image, title, and author.

![Home](./assets/home.png)

### Course Details

Displays detailed information for a selected course, including an option to delete it.

![Course Details](./assets/course-details.png)

### Delete Course

Confirms course deletion to ensure that users do not accidentally remove a course.

![Delete Course](./assets/delete-course.png)

## Ionic Commands Used in the Project

### Installation and Setup

1. **Install Ionic CLI**: Installs the Ionic CLI globally.

```bash
   npm install -g @ionic/cli
```

2.**Create a New Ionic Project**: Generates a blank starter project named "CourseDex."

```bash
ionic start CourseDex blank --type=angular
```

3.**Run the App**:Starts a development server and opens the app in the default browser.

```bash
ionic serve
```

4.**Configuring in TypeScript**:

Enhance debugging by configuring `tsconfig.json`:

```json
  "compilerOptions": {
// Add type definitions for better type checking and autocompletion
"types": [],
  }
```

### Project Structure Commands

- **Generate a Page**: Creates an add-course page, which includes both TypeScript and HTML files for that page.

```bash
ionic generate page add-course
```

- **Generate a Service**: Creates a service to handle data operations for courses.

```bash
ionic generate service services/gestion-courses
```

## Used & Learned Ionic UI Components

### Key Components
- **`ion-icon`**: Displays various icons throughout the app, enhancing visual cues and providing an intuitive user experience.
- **`ion-form`**: Encapsulates form elements, enabling data collection and user input handling in an organized manner.
- **`ion-avatar`**: Used to create circular profile images, giving a visually appealing look to list items.
- **`ion-buttons` and `ion-button`**:
  - **`ion-button`**: Used as a standalone button with customizable properties (`color`, `expand`, etc.) for actions like adding or submitting.
  - **`ion-buttons`**: Container for grouping multiple buttons together in a toolbar or header section, often paired with `slot` attributes to control placement.

### Bindings, Interpolations, and Directives
- **Bindings**: Angular's bindings (`[property]="value"` and `(event)="handler"`) are used to sync data between components and the view.
- **Interpolation**: `{{ ... }}` is used to display variables directly within the HTML, dynamically updating as data changes.
- **Directives**:
  - `*ngFor`: Loops through arrays to generate repeated elements in the view.
  - `*ngIf`: Conditionally displays elements based on specific criteria.

### References
- **Template Reference Variables**: Variables such as `#f="ngForm"` reference form elements within the template to access their properties and methods, useful for managing form validation and submission.

## Models & Their Role
Models in Angular represent the data structure used throughout the application. In this project, the `Course` model defines a blueprint for course objects, containing properties like `id`, `title`, `author`, `image`, and `keywords`. Models ensure data consistency across the app and make it easier to manage course data as objects.

## Service
The service in Angular acts as a centralized provider of data and logic. Here, `ManageCoursesService` manages the courses, handling all data operations like adding, deleting, or retrieving courses. It helps separate business logic from the component code, making the app more modular and maintainable.

## Dependency Injections
Dependency injection (DI) in Angular allows us to pass instances of a class (e.g., a service) to components. There are two common ways to use DI:
1. **Constructor Injection**: Passing dependencies through the constructor of a component or service.
2. **Injector Tokens**: Using Angular’s dependency injector with tokens to provide specific instances where needed.

## CRUD Operations
- **Create**: Adding new courses via a form.
- **Read**: Retrieving and displaying the list of courses or individual course details.
- **Update**: (Optional in this app, typically involves editing course info).
- **Delete**: Removing a course from the list.

### Array Methods
- **`findIndex`**: Locates the index of the first array element that meets specified criteria. Useful for finding a specific course by `id`.
- **`indexOf`**: Unlike `findIndex`, `indexOf` directly finds the index of a given element (exact match).
- **`splice`**: Used to add, remove, or replace elements in an array at a specific index. Here, it removes a course by index when deleting.

## Role of Submit
The submit action, triggered by `(ngSubmit)="onSubmit(f.value)"`, initiates form submission in Angular. It allows data from the form to be processed and managed as needed, enabling actions like adding a new course to the list.

## Forms in Angular
Angular supports two types of forms:
1. **Reactive Forms**: Dynamically updates form fields based on user interaction. Useful for real-time validation and more complex form behavior.
2. **Template-Driven Forms**: Simpler to set up, using Angular directives to bind form data. Suitable for basic forms, as used here with `ngModel`.

## Additional Ionic Component: `<ion-alert>`
- **`<ion-alert>`**: Displays a pop-up alert to the user. Alerts are useful for confirming actions, like deleting a course, by providing options like "Yes" or "No". It enhances user experience by allowing users to confirm critical actions.

---

This README summarizes the main concepts and technologies used in CourseDex, providing insights into Ionic and Angular's core features.
````
