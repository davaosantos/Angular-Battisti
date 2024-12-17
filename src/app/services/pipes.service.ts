import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipesService {

  constructor() {

   }

   increase(value:any){
    return value += 2.0;
   }
}
