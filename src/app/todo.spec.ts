/* unit test of the Todo task */

import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const todo = new Todo({
      name: 'hello',
      complete: true
    });
    expect(todo.name).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
