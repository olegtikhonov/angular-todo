import {Component, OnInit} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

/**
 * Defines a dump component which separates concerns.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent  implements OnInit {
  todos: Todo[] = [];
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }


  /**
   * When a toggle checked/unchecked.
   * @param todo to be chosen
   */
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  /**
   * Adds a new {@link Todo}
   * @param todo an item to be added
   */
  onAddTodo(todo: Todo) {
    // tslint:disable-next-line:no-shadowed-variable
    this.todoDataService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }

  /**
   * Removes {@link Todo}
   *
   * @param todo to be removed.
   */
  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  // Gets all todo(s)
/*  get todos() {
    return this.todoDataService.getAllTodos();
  }*/

  ngOnInit(): void {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }
}
