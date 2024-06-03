import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone:true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports:[FormsModule]
})
export class TaskFormComponent {
  @Input() taskList: { task_name: string, task_desc: string }[] = [];
  task_name: string;
  task_desc: string;
  searchText: string;

  addTodo() {
    const newTask = { task_name: this.task_name, task_desc: this.task_desc };
    this.taskList.unshift(newTask);
    localStorage.setItem("my_tasks", JSON.stringify(this.taskList));
    this.task_name = "";
    this.task_desc = "";
  }
}
