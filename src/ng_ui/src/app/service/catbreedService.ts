import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CatBreed, Breed} from '../models/CatBreed';


@Injectable({ providedIn: 'root' })

export class CatBreedService {

    breed_url = "https://api.thecatapi.com/v1/images/search?breed_id=";
    breeds_url = "https://api.thecatapi.com/v1/breeds";

    constructor(private http: HttpClient) {
      }
    
      public getBreed(breed_id : string): Observable<any> {
        return  this.http.get<any>(`${this.breed_url}${breed_id}`);
      }

      public getBreeds( ): Observable<CatBreed[]> {
        return  this.http.get<CatBreed[]>(this.breeds_url);
      }

}

export default CatBreedService;