import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
  title: 'Todos'
  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  // Service is now available as this.todoDataService
  /*toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }*/
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // Adds a new ToDO task
 /* addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }*/

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }


  // Removes the Todo task
/*  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }*/
  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  // Gets all todo(s)
  get todos() {
    return this.todoDataService.getAllTodos();
  }

  editTodo(name) {
    return this.todoDataService.editTodoName(this.newTodo.id, name);
  }
}
