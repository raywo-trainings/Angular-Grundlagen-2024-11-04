import { Routes } from '@angular/router';
import {RecipeListComponent} from './recipe/components/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe/components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
    title: 'Rezeptliste'
  },
  {
    path: 'recipes/:recipeId',
    component: RecipeDetailComponent,
    title: 'Rezept'
  }
];
