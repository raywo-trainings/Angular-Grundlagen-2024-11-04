import {Component, inject} from '@angular/core';
import {RecipeViewComponent} from '../recipe-view/recipe-view.component';
import {RecipeService} from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeViewComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {

  private recipeService: RecipeService = inject(RecipeService);

  protected recipes = this.recipeService.getAllRecipes();

}
