import {TestBed, async, inject} from '@angular/core/testing';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';



const EXPECTED_NAME = 'New Name';

describe('TodoDataService', () => {
  beforeEach(() => {
    // to configure and create an Angular testing module in which we want to run our unit tests
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({name: 'Hello 1', complete: false});
      const todo2 = new Todo({name: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({name: 'Hello 1', complete: false});
      const todo2 = new Todo({name: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({name: 'Hello 1', complete: false});
      const todo2 = new Todo({name: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({name: 'Hello 1', complete: false});
      const todo2 = new Todo({name: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });



  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({name: 'Hello 1', complete: false});
      service.addTodo(todo);
      const updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

  });

  describe('#editTodoName(todo)', () => {
    it('should return the updated todo with new name', inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({name: 'Hello 1', complete: false});
      service.addTodo(todo);

      const editedName = service.editTodoName(todo.id, 'New Name');
      const updatedTodo = service.toggleTodoComplete(editedName);
      expect(updatedTodo.name).toEqual(EXPECTED_NAME);
    }));
  });

});
