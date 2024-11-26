import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import TaskComponent from './task/task.component';
import ITask from './models/task';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  tasks: ITask[] = [
    {
      title: "Hit the gym",
      deadline: "01.04.2023",
      status: false,
      priority: 0
    },
    {title: "Pay bills",
      deadline: "29.03.2023",
      status: true,
      priority: 1
    },
    {title: "Buy eggs",
      deadline: "29.03.2023",
      status: false,
      priority: 1
    },
    {title: "Meet John",
      status: false,
      priority: 0
    },
    {title: "Read a book",
      status: true,
      priority: 0
    },
    {title: "Organize office",
      status: false,
      priority: 0
    },
    {title: "Eat dinner",
      status: false,
      priority: 0
    },
    {title: "Buy apples",
      deadline: "05.03.2023",
      status: false,
      priority: 1
    }
  ]
}
