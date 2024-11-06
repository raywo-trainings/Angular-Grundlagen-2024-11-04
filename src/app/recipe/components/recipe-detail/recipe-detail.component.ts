import {Component, effect, inject, input, signal, untracked, WritableSignal} from '@angular/core';
import {createEmptyRecipe, Recipe} from '../../models/Recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {RecipeInfoViewComponent} from '../recipe-info-view/recipe-info-view.component';
import {RecipeIngredientsListComponent} from '../recipe-ingredients-list/recipe-ingredients-list.component';
import {RouterLink} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faEdit} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    RecipeInfoViewComponent,
    RecipeIngredientsListComponent,
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  private readonly service = inject(RecipeService)
  protected recipe: WritableSignal<Recipe> = signal<Recipe>(createEmptyRecipe())
  public recipeId = input.required<string>()


  constructor() {
    effect(() => {
      const id = this.recipeId()

      untracked(() => this.service.getRecipe(id)
        .subscribe(recipe => this.recipe.set(recipe)))
    });
  }


  protected readonly faEdit = faEdit;
}
