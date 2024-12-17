import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name : "Colt",type : "Dog", age : 10 },
    { name : "Tom", type : "Cat", age : 3},
    { name : "Frida", type : "Dog", age : 4},
    { name : "Agro", type : "Horse" ,age : 15}
  ];

  animal : Animal = {
    name: "Puiu",
    type: "Ave",
    age : 300
  }

  animes = [
    { name : "Dragonball", year : "1998", nota : 8 },
    { name : "Naruto", year : "2002", nota : 7.5 },
    { name : "Jujutsu", year : "2016", nota : 7.0 },
  ]

  animalDetails = '';

  constructor(private listService : ListService){

  }

  showAge(animal : Animal) : void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos` 
  }

  removeAnimal(animal : Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }
}
