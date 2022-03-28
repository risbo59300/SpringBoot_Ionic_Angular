import { Injectable } from '@angular/core';
import {Http, HttpResponse} from '@capacitor-community/http';

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable ({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8081/todos';

  constructor() {}

  createTodo(todo: Todo): Promise<HttpResponse> {
    const options = {
      url: `${this.baseUrl}`,
      data: todo,

      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type' : 'application/json'}
    };

    return Http.post(options);
  }

  updateTodo(todo: Todo): Promise<HttpResponse> {
    const options = {
      url: `${this.baseUrl}/${todo.id}`,
      data: todo,

      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type' : 'application/json'}
    };

    return Http.put(options);
  }

  findAllTodo(): Promise<HttpResponse> {
    const options = {
      url: `${this.baseUrl}`,

      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type' : 'application/json'}
    };

    return Http.get(options);
  }

  findTodoById(id: number): Promise<HttpResponse> {
    const options = {
      url: `${this.baseUrl}/${id}`,

      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type' : 'application/json'}
    };

    return Http.get(options);
  }

  deleteTodo(id: number): Promise<HttpResponse> {
    const options = {
      url: `${this.baseUrl}/${id}`,

      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type' : 'application/json'}
    };

    return Http.del(options);
  }


}
