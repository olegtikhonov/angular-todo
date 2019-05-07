import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class TodoListFooterComponent {
  @Input()
  todos: Todo[];

  constructor() {
  }

  @Output()
  update: EventEmitter<Todo> = new EventEmitter();

  updateCounter(): number {
    let incompleteCounter = 0;
    this.todos.forEach((entry) => {
      console.log(entry);
      if (this.isComplete(entry.complete)) {
        incompleteCounter++;
      }
    });
    return incompleteCounter;
  }

  isComplete(value): boolean {
    return value ? false : true;
  }
}
