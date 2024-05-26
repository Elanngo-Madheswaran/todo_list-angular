import { Component, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Input() taskList;
  task_name: string;
  searchText: string;

  addTodo(){
    this.taskList.unshift(this.task_name);
    localStorage.setItem("my_tasks", JSON.stringify(this.taskList))
    this.task_name="";
  }
}
