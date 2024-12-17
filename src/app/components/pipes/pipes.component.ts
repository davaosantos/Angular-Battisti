import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesService } from '../../services/pipes.service';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  someText = "TESTANDO O PIPE OPERATOR"
  today = new Date();
  value = 123.45;

  constructor(private pipeService : PipesService){

  }

  increaseValue(value : any){
    console.log("Entrou no componente")
    this.value = this.pipeService.increase(value);
  }
}
