import {Component, input} from '@angular/core';
import {Recipe} from '../../models/Recipe.model';
import {faCircleExclamation, faClock} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-recipe-info-view',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './recipe-info-view.component.html',
  styleUrl: './recipe-info-view.component.scss'
})
export class RecipeInfoViewComponent {
  public recipe = input.required<Recipe>()
  protected readonly faClock = faClock;
  protected readonly faExclamation = faCircleExclamation;
}
