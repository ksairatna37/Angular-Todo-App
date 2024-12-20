import { Component } from '@angular/core';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [ TodosComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = '_________';
  // constructor(){
  //   setTimeout(() => {
  //     this.title="Sairatna"
  //   }, 2000);
  // }
}
