import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../models/task'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export default class TaskComponent {
  @Input()
  task?: ITask;

  @Output()
  onDelete = new EventEmitter<number>();

  remove() {
    this.onDelete.emit(this.task?.id);
  }
}
