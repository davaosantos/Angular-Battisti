import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show : Boolean = false;
  name : String = "David";
  isSobrenomeConcatenado : Boolean = false;

  showMessage() : void{
    this.show = !this.show;
  }

  showNomeComSobrenome() : void{
    if(!this.isSobrenomeConcatenado){
      this.name = this.name + " Oliveira";
    }
    this.isSobrenomeConcatenado = true;
  }
}
