import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { Anime } from 'src/app/Anime';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  animes: Anime[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
    this.getAnimes();
  }

  getAnimes(){
    this.listService.getAllAnime().subscribe((animes) =>{
      this.animes = animes
    });
  }

  getAnimals(){
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals
    }); 
  }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  
}
