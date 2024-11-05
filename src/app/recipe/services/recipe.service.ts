import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../models/Recipe.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = "http://localhost:3000/recipes";
  private http: HttpClient = inject(HttpClient);


  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
  }
}
