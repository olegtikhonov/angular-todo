import {Injectable, OnInit} from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from './todo';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


const API_URL = environment.apiUrl;
const BASE_URL =  '/todos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

/**
 * Responsible to make call to node js mongodb backend.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
    console.log('URL:' + API_URL + BASE_URL);
    return this.http.get<Todo[]>(API_URL + BASE_URL);
  }

  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    console.log('URL:' + API_URL + BASE_URL + ', createToDo');
    return this.http.post<Todo>(API_URL + BASE_URL, todo, httpOptions).pipe(map(res => res), catchError(err => {
      console.error(err.message);
      return throwError('Error thrown from catchError');
    }));
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    console.log('URL:' + API_URL + BASE_URL + ', getTodoById');
    return this.http.get<Todo>(API_URL + BASE_URL + todoId);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    console.log('URL:' + API_URL + BASE_URL + ', updateTodo, ' + todo.name);
    return this.http.put<Todo>(API_URL + BASE_URL + '/' + todo._id, todo, httpOptions);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<any>  {
    console.log('URL:' + API_URL + BASE_URL + ', deleteTodoById');
    return this.http.delete<any>(API_URL + BASE_URL + '/' + todoId, httpOptions);
  }
}
