import { Component } from '@angular/core';
import {recipes} from '../../data/recipe.dummy.data';
import {RecipeViewComponent} from '../recipe-view/recipe-view.component';

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

  protected recipes = recipes;

}
