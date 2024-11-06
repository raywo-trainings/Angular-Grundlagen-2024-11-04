import {Component, input} from '@angular/core';
import {Ingredient} from '../../models/Ingredient.model';


@Component({
  selector: 'app-recipe-ingredients-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-ingredients-list.component.html',
  styleUrl: './recipe-ingredients-list.component.scss'
})
export class RecipeIngredientsListComponent {

  public servings = input.required<number>()
  public ingredients = input.required<Ingredient[]>()

}
