import {Component, input} from '@angular/core';

@Component({
  selector: 'app-recipe-view',
  standalone: true,
  imports: [],
  templateUrl: './recipe-view.component.html',
  styleUrl: './recipe-view.component.scss'
})
export class RecipeViewComponent {

  public recipe = input.required<any>()

}