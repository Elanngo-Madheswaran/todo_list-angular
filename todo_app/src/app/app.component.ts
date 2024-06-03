import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgFor , TaskFormComponent , TaskListComponent , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Task List';

  taskList: { task_name: string, task_desc: string }[] = [];


  ngOnInit(): void {
    if(localStorage.getItem("my_tasks")){
      this.taskList = JSON.parse(localStorage.getItem("my_tasks"))
    }
  }

}
