import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import TaskComponent from './task/task.component';
import { ITask, TASKS } from './models/task';
import { TaskFormComponent } from "./task-form/task-form.component";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  tasks: ITask[] = [];

  constructor(private http: HttpClient){
    const api = 'https://dummyjson.com/todos';

    //http.get<ITask[]>(api).subscribe(data => this.tasks = data);

    http.get<{ todos: ITask[] }>(api).subscribe(response => {
      this.tasks = response.todos;
    });
  }

  removeItem(id: number){

    let index = this.tasks.findIndex(x => x.id === id);
    if(index !== -1) this.tasks.splice(index, 1);
  }

  createTask(task: ITask){
    this.tasks.push(task);
  }
}
