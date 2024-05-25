import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[];

  constructor(){
    this.todos = [
      {
        sno:1,
        title:"This is title1",
        desc: "This is description",
        active: true
      },
      {
        sno:2,
        title:"This is title2",
        desc: "This is description",
        active: true
      }
    ]
  }
}
