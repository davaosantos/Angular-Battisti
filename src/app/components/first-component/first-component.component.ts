import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  
  name : String = "David"
  age = 30;
  job = "Programmer";
  hobbies = ["Correr", "Ler", "Estudar"];
  car = {
    nmCarro : "Celta",
    ano : "1998"
  }
}
