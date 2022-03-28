import { Todo, TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  todo$: Todo[] = [];
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private data: DataService
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  submitForm(value: {title: string , completed: false}): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty( key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }

    value.completed = false;
    console.log('Submitted '+ value);
    this.todoService.createTodo(value)
      .then(()=> {
        this.todoService.findAllTodo().then((res)=> {
          this.todo$ = res.data;
        });
      });

    this.validateForm.reset();
  };

  ngOnInit(): void {
    this.todoService.findAllTodo().then((res)=> {
      this.todo$ = res.data;
    });

    this.validateForm = this.fb.group({
      title: [null, Validators.required]
    });
  };

  update = (todo) => {
    const updateTodo = Object.assign({}, todo);
    updateTodo.completed = !updateTodo.completed;
    console.log('Todo update', updateTodo);
    this.todoService.updateTodo(updateTodo).then(()=>{
      this.todoService.findAllTodo().then((res)=> {
        this.todo$ = res.data;
      });
    });
  };

  delete = (todo: Todo) => {
    console.log('Delete', todo);
    this.todoService.deleteTodo(todo.id).then(()=>{
      this.todoService.findAllTodo().then((res)=> {
        this.todo$ = res.data;
      });
    });
  };

  refresh(ev): void {
    this.todoService.findAllTodo().then(res => {
      this.todo$ = res.data;
      ev.detail.complete();
    });
  };

  getMessages(): Message[] {
    return this.data.getMessages();
  };

}
