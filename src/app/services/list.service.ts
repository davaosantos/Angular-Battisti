import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Anime } from '../Anime';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  private apiUrlAnimals = "http://localhost:3000/animals";
  private apiUrlAnime = "http://localhost:3000/animes";


  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrlAnimals}/${id}`);
  }

  constructor(private http : HttpClient) {}

  remove(id : Number) {
    return this.http.delete<Animal>(`${this.apiUrlAnimals}/${id}`);
  }

  getAll() : Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrlAnimals);
  }

  getAllAnime() : Observable<Anime[]>{
    return this.http.get<Anime[]>(this.apiUrlAnime);
  }

  
}
