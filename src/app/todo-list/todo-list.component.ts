import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

/**
 * A dump component, separates concerns.
 */
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  /* Injects the todos from the parent component. */
  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  update: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  /**
   * When toggle is checked, means a task is completed.
   *
   * @param todo to be marked as completed.
   */
  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
    this.update.emit(todo);
  }

  /**
   * Removes the todo item from the list
   *
   * @param todo an item to be removed.
   */
  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
    this.update.emit(todo);
  }
}
