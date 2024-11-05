import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe, RecipeDTO} from '../models/Recipe.model';
import {map, Observable} from 'rxjs';
import {mapRecipeDTOToRecipe} from '../mappings/recipe.mappings';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = "http://localhost:3000/recipes";
  private http: HttpClient = inject(HttpClient);


  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<RecipeDTO[]>(this.apiUrl)
      .pipe(
        map(recipeDTOs => recipeDTOs.map(mapRecipeDTOToRecipe))
        // folgende Zeile ist funktional identisch zur obigen Zeile
        // map(recipeDTOs => recipeDTOs.map(dto => mapRecipeDTOToRecipe(dto)))
      )
  }
}
