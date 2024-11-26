import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import TaskComponent from './task/task.component';
import { ITask, TASKS } from './models/task';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  tasks: ITask[] = TASKS;

  removeItem(id: number){

    let index = this.tasks.findIndex(x => x.id === id);
    if(index !== -1) this.tasks.splice(index, 1);
  }
}
