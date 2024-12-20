import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AddtodoComponent } from '../addtodo/addtodo.component';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoListComponent,AddtodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[];
  constructor(){
    this.todos = [
      
    ]
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1); 
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }
}
