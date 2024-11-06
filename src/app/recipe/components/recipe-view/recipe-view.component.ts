import {Component, input} from '@angular/core';
import {Recipe} from '../../models/Recipe.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './recipe-view.component.html',
  styleUrl: './recipe-view.component.scss'
})
export class RecipeViewComponent {

  public recipe = input.required<Recipe>()

}
