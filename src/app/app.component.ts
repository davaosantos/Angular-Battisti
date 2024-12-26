import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData = {
    email: 'david@gmail.com',
    role: 'Admin',
  };

  userName = 'davaosantos';

  title = 'teoria';
}
