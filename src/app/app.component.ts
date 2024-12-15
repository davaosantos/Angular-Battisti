import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { SecondComponentComponent } from "./components/second-component/second-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent, SecondComponentComponent, ParentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
  username = "davaosantos";
  userData = {
    name : "Dalisson",
    age : 26,
    role : "Developer"
  }
}
