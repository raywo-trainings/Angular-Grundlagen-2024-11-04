import {Component, effect, inject, input, signal, untracked, WritableSignal} from '@angular/core';
import {createEmptyRecipe, Recipe} from '../../models/Recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  private service = inject(RecipeService)
  protected recipe: WritableSignal<Recipe> = signal<Recipe>(createEmptyRecipe())
  public recipeId = input.required<string>()


  constructor() {
    effect(() => {
      const id = this.recipeId()

      untracked(() => this.service.getRecipe(id)
        .subscribe(recipe => this.recipe.set(recipe)))
    });
  }
}
