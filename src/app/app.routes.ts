import { Routes } from '@angular/router';
import {RecipeListComponent} from './recipe/components/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe/components/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe/components/recipe-edit/recipe-edit.component';

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
    path: 'recipes/new',
    component: RecipeEditComponent,
    title: 'Neues Rezept'
  },
  {
    path: 'recipes/:recipeId',
    component: RecipeDetailComponent,
    title: 'Rezept'
  },
  {
    path: 'recipes/:recipeId/edit',
    component: RecipeEditComponent,
    title: 'Rezept'
  }
];
