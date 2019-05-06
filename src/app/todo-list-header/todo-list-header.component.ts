import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';



@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {
  newTodo: Todo = new Todo();

  /*
  * Use in directives and components to emit custom events synchronously or asynchronously, and register handlers for those events by
  * subscribing to an instance.
  * When true, deliver events asynchronously
  */
  @Output()
  add: EventEmitter<Todo> = new EventEmitter(true);

  constructor() { }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
