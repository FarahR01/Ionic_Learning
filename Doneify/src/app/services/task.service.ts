import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = '/Tasks';

  constructor(private db: AngularFireDatabase) {}

  getAllTasks(): Observable<any> {
    return this.db.list(this.baseUrl).valueChanges();
  }

  addTask(newTask: any) {
    console.log('Pushing task to Firebase:', newTask); // Debugging Firebase push
    return this.db.list(this.baseUrl).push(newTask);
  }

  updateTask(checked: boolean, taskId: string) {
    return this.db.object(`${this.baseUrl}/${taskId}`).update({ checked });
  }

  deleteTask(taskId: string) {
    return this.db.object(`${this.baseUrl}/${taskId}`).remove();
  }
  
}
