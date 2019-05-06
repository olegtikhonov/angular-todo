import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  editing = false;
  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output() handleModify = new EventEmitter();

  constructor() { }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  cancelEditing(): void {
    this.editing = false;
  }

  edit(): void {
    this.editing = true;
  }

  removeTodoItem(): void {
    this.removeTodo(this.todo);
  }

  stopEditing(newTodoName: string): void {
    this.todo.name = newTodoName;
    this.editing = false;

    if (this.todo.name.length) {
      this.update();
    } else {
      this.removeTodoItem();
    }
  }

  update(): void {
    this.handleModify.next(this.todo);
  }
}
