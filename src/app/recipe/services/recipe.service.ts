import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe, RecipeDTO} from '../models/Recipe.model';
import {map, Observable} from 'rxjs';
import {mapRecipeDTOToRecipe, mapRecipeToRecipeDTO} from '../mappings/recipe.mappings';
import {environment} from '../../../environments/environment';


type RecipeIdentifier = Recipe | string

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = "http://localhost:3000/recipes";
  private http: HttpClient = inject(HttpClient);


  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<RecipeDTO[]>(this.getUrl())
      .pipe(
        map(recipeDTOs => recipeDTOs.map(mapRecipeDTOToRecipe))
        // folgende Zeile ist funktional identisch zur obigen Zeile
        // map(recipeDTOs => recipeDTOs.map(dto => mapRecipeDTOToRecipe(dto)))
      )
  }


  public getRecipe(id: string): Observable<Recipe> {
    return this.http.get<RecipeDTO>(this.getUrl(id))
      .pipe(
        map(dto => mapRecipeDTOToRecipe(dto))
      )
  }


  public addRecipe(recipe: Recipe): Observable<Recipe> {
    const recipeDTO = mapRecipeToRecipeDTO(recipe);
    return this.http.post<RecipeDTO>(this.getUrl(), recipeDTO)
      .pipe(
        // äquivalent zu map(dto => mapRecipeDTOToRecipe(dto)
        map(mapRecipeDTOToRecipe)
      )
  }


  public updateRecipe(recipe: Recipe): Observable<Recipe> {
    const recipeDTO = mapRecipeToRecipeDTO(recipe);
    return this.http.put<RecipeDTO>(this.getUrl(recipe), recipeDTO)
      .pipe(
        map(mapRecipeDTOToRecipe)
      )
  }


  public deleteRecipe(recipe: Recipe): Observable<void> {
    return this.http.delete<void>(this.getUrl(recipe))
  }


  private getUrl(identifier?: RecipeIdentifier): string {
    let id = this.extractID(identifier)

    return `${(environment.apiEndpoint)}/recipes${id ? '/' + id : ""}`
  }


  private extractID(identifier?: RecipeIdentifier): string | undefined {
    if (!identifier) return undefined

    if (typeof identifier === "string") {
      return identifier
    }

    return identifier.id
  }
}
