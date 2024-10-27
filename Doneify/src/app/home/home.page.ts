import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentDate: Date = new Date();
  tasks: any[] = [];
  isAddingTask: boolean = false;

  constructor(
    private taskService: TaskService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadTasks();
  }
  convertToString(value: any): string {
    return String(value || '');
  }
  
  /**
   * Toggles the visibility of the add-task input
   */
  toggleAddTaskInput() {
    this.isAddingTask = !this.isAddingTask;
  }

  /**
   * Adds a new task to the task list
   * @param taskText - The text content of the new task
   */
  addTask(taskText: any) {
    console.log('Add button clicked with taskText:', taskText); // Check if function is called
  
    const text = String(taskText || '').trim();
    if (!text) {
      alert('Task cannot be empty!');
      return;
    }
  
    const newTask = {
      checked: false,
      title: text,
      date: new Date(),
    };
  
    console.log('New Task:', newTask); // Check if task object is created correctly
  
    this.taskService.addTask(newTask)
      .then(() => {
        console.log('Task added successfully'); // Log success
        this.loadTasks();
        this.toggleAddTaskInput();
      })
      .catch((error) => console.error('Error adding task:', error));
  }
  
  
  

  /**
   * Presents a confirmation alert before deleting a task
   * @param taskId - The ID of the task to delete
   */
  async confirmDeleteTask(taskId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteTask(taskId);
          },
        },
      ],
    });

    await alert.present();
  }

  /**
   * Deletes a task from the task list
   * @param taskId - The ID of the task to delete
   */
  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId)
      .then(() => this.loadTasks())
      .catch((error) => console.error('Error deleting task:', error));
  }
  

  /**
   * Toggles the checked status of a task
   * @param task - The task to update
   */
  toggleTaskStatus(task: any) {
    const updatedCheckedStatus = !task.checked;
  
    this.taskService.updateTask(updatedCheckedStatus, task.id)
      .then(() => this.loadTasks())
      .catch((error) => console.error('Error updating task:', error));
  }
  

  /**
   * Loads all tasks from the database
   */
  loadTasks() {
    this.taskService.getAllTasks().subscribe({
      next: (response) => {
        this.tasks = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
      },
      error: (error) => console.error('Error loading tasks:', error),
    });
  }
}
