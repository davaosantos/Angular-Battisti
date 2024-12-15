import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'red';

  arrayClasses = ["green-title", "small-title"];
  underline = "underline-title";
}
