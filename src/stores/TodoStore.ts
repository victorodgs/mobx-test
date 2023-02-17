import { decorate, observable, computed } from "mobx";

export interface ITodo {
  title: string;
  completed: boolean;
}

export class TodoStore {
  @observable todos: ITodo[] = [];

  @observable lastUpdated: string | Date | null = null;

  @computed get totalTodos() {
    return this.todos.length;
  }

  public loadTodosList = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.lastUpdated = new Date().toLocaleString();
      });
  };
}
