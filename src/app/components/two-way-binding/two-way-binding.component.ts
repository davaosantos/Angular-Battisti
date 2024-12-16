import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  name : String = '';
  age = null;
}
