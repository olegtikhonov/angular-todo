import {Component, Input, Output, EventEmitter, Injectable} from '@angular/core';
import { Todo } from '../todo';
import {ApiService} from '../api.service';
import {TodoDataService} from '../todo-data.service';


/**
 * Defines a dump compenent, which separates concerns.
 */
@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class TodoListItemComponent {


  /* A flag which says to edit or not. */
  editing = false;

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output() handleModify = new EventEmitter();


  constructor(private toDoDataService: TodoDataService) { }

  /**
   * Marks a toggle to be completed.
   *
   * @param todo to be completed.
   */
  toggleTodoComplete(todo: Todo) {
    console.log('todo-list-item component toggleTodoComplete');
    this.toggleComplete.emit(todo);
  }

  /**
   * Removes a todo task.
   *
   * @param todo to be removed.
   */
  removeTodo(todo: Todo) {
    console.log('todo-list-item component removeTodo, id:' + todo.id + ', complete:' + todo.complete + ', ' + 'name:' + todo.name);
    this.remove.emit(todo);
  }

  /**
   * Cancels editing.
   */
  cancelEditing(): void {
    this.editing = false;
  }

  /**
   * Marks a todo item to be edited.
   */
  edit(): void {
    console.log('todo-list-item component edit');
    this.editing = true;
  }

  /**
   * Removes todo item.
   */
  removeTodoItem(): void {
    this.removeTodo(this.todo);
  }

  /**
   * When editing is finished.
   *
   * @param newTodoName a new name to the todo item.
   */
  stopEditing(newTodoName: string): void {
    this.todo.name = newTodoName;
    this.editing = false;

    if (this.todo.name.length) {
      this.update();
    } else {
      this.removeTodoItem();
    }
  }

  /**
   * Updates an item with new name.
   */
  update(): void {
    console.log('todo-list-item component update');
    this.handleModify.next(this.todo);
  }
}
