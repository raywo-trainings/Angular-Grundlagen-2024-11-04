import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RecipeListComponent} from './recipe/components/recipe-list/recipe-list.component';
import {ToastComponentComponent} from './shared/components/toast-component/toast-component.component';
import {Toast} from './shared/models/toast.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeListComponent, ToastComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipes';
  toast: Toast = {
    title: "Fehler",
    message: "Es ist ein unerwarteter Fehler aufgetreten.",
    type: "error"
  }
}
