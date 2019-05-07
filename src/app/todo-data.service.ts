import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // Placeholder for last id so we can simulate automatic incrementing of ids
  /*lastId: number = 0;*/

  constructor(private api: ApiService) {
  }

  // actions
  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<any> {
    return this.api.deleteTodoById(id);
  }

  // Simulate PUT /todos/:id
  updateTodoById(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Observable<Todo> {
   return this.api.getTodoById(id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
