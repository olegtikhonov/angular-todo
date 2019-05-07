/* todo task */

export class Todo {
  // number, unique ID of the todo item
  _id: number;
  // string, a name of the todo item
  name: string = '';
  // boolean, whether or not the todo item is complete
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
