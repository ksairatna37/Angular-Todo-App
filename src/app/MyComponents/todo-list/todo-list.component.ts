import { Component, Input ,EventEmitter, Output} from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todo : Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }
}
