import { Component } from '@angular/core';
import {recipes} from '../../data/recipe.dummy.data';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {

  protected recipes = recipes;

}
