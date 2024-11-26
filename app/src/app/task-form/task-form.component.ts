import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ITask } from '../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  
  taskForm: FormGroup;

  @Output()
  onCreate = new EventEmitter<ITask>();
  
  constructor(private formBuilder: FormBuilder) {
    this.taskForm= this.formBuilder.group({
      title: ['', Validators.required],
      deadline: [null],
      priority: ['0']
    });
  }

  onSubmit(){

    if(!this.taskForm.valid)
    {
        alert("Invalid data!");
        return;
    }

    let task = this.taskForm.value as ITask;

    this.onCreate.emit(task);
  }
}
