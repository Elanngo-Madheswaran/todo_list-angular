
import { NgFor , NgIf } from '@angular/common';
import { Component , Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor,NgIf , FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks;
  
  searchText: string = "";
  delete_task(i :number){
    this.tasks.splice(i ,1);
    localStorage.setItem("my_tasks", JSON.stringify(this.tasks))
  }
}
