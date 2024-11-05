import { Injectable } from '@angular/core';
import {Recipe} from '../models/Recipe.model';
import {recipes} from '../data/recipe.dummy.data';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _recipes: Recipe[] = recipes;


  public getAllRecipes(): Recipe[] {
    return this._recipes
  }


  public getRecipe(id: string): Recipe | undefined {
    return this._recipes.find(recipe => recipe.id === id);
  }
}
