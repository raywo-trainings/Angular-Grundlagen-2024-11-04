import {Component, inject, OnInit} from '@angular/core';
import {RecipeViewComponent} from '../recipe-view/recipe-view.component';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../models/Recipe.model';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeViewComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {

  private recipeService: RecipeService = inject(RecipeService);

  protected recipes: Recipe[] = []


  public ngOnInit() {
    this.recipeService.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes)
  }
}
