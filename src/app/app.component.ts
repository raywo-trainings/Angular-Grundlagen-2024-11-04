import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RecipeListComponent} from './recipe/components/recipe-list/recipe-list.component';
import {ToastContainerComponent} from './toasts/components/toast-container/toast-container.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeListComponent, ToastContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipes';
}
