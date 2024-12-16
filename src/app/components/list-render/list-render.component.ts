import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    { name : "Colt",type : "Dog" },
    { name : "Tom", type : "Cat"},
    { name : "Frida", type : "Dog" },
    { name : "Agro", type : "Horse"}
  ];

  animes = [
    { name : "Dragonball", year : "1998", nota : 8 },
    { name : "Naruto", year : "2002", nota : 7.5 },
    { name : "Jujutsu", year : "2016", nota : 7.0 },
  ]
}
