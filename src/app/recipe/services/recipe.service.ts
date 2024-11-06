import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Recipe, RecipeDTO} from '../models/Recipe.model';
import {catchError, map, Observable, throwError} from 'rxjs';
import {mapRecipeDTOToRecipe, mapRecipeToRecipeDTO} from '../mappings/recipe.mappings';
import {createToast} from '../../toasts/models/toast.model';
import {ToastService} from '../../toasts/components/services/toast.service';


type RecipeIdentifier = Recipe | string

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = "http://localhost:3000/recipes";
  private toastService = inject(ToastService);
  private http: HttpClient = inject(HttpClient);


  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<RecipeDTO[]>(this.apiUrl)
      .pipe(
        map(recipeDTOs => recipeDTOs.map(mapRecipeDTOToRecipe)),
        // folgende Zeile ist funktional identisch zur obigen Zeile
        // map(recipeDTOs => recipeDTOs.map(dto => mapRecipeDTOToRecipe(dto)))
        catchError(error => this.handleError(error))
      )
  }


  public getRecipe(id: string): Observable<Recipe> {
    return this.http.get<RecipeDTO>(this.getUrl(id))
      .pipe(
        map(dto => mapRecipeDTOToRecipe(dto)),
        catchError(error => this.handleError(error))
      )
  }


  public addRecipe(recipe: Recipe): Observable<Recipe> {
    const recipeDTO = mapRecipeToRecipeDTO(recipe);
    return this.http.post<RecipeDTO>(this.getUrl(), recipeDTO)
      .pipe(
        // äquivalent zu map(dto => mapRecipeDTOToRecipe(dto)
        map(mapRecipeDTOToRecipe),
        catchError(error => this.handleError(error))
      )
  }


  public updateRecipe(recipe: Recipe): Observable<Recipe> {
    const recipeDTO = mapRecipeToRecipeDTO(recipe);
    return this.http.put<RecipeDTO>(this.getUrl(recipe), recipeDTO)
      .pipe(
        map(mapRecipeDTOToRecipe),
        catchError(error => this.handleError(error))
      )
  }


  public deleteRecipe(recipe: Recipe): Observable<void> {
    return this.http.delete<void>(this.getUrl(recipe))
      .pipe(
        catchError(error => this.handleError(error))
      )
  }


  private getUrl(identifier?: RecipeIdentifier): string {
    let id = this.extractID(identifier)

    return `http://localhost:3000/recipes${id ? '/' + id : ""}`
  }


  private extractID(identifier?: RecipeIdentifier): string | undefined {
    if (!identifier) return undefined

    if (typeof identifier === "string") {
      return identifier
    }

    return identifier.id
  }


  private handleError(error: HttpErrorResponse) {
    const toast = createToast("Fehler",
      `Es konnten keine Daten geladen werden. Statuscode: ${error.status}, Meldung vom Server: ${error.message}`,
      "error")
    this.toastService.showToast(toast)

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
