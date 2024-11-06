import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {TimeUnit} from './TimeUnit.model';
import {PortionUnits} from './PortionUnit.model';
import {Difficulty} from './Difficulty.model';


export interface DurationForm {
  value: FormControl<number>;
  unit: FormControl<TimeUnit>;
}


export interface IngredientForm {
  name: FormControl<string>;
  quantity: FormControl<number>;
  unit: FormControl<PortionUnits>;
}


export interface RecipeForm {

  name: FormControl<string>;
  servings: FormControl<number>;
  duration: FormGroup<DurationForm>
  ingredients: FormArray<FormGroup<IngredientForm>>;
  difficulty: FormControl<Difficulty>;
  preparation: FormControl<string>;

}


export const timeUnitOptions = [
  {
    value: TimeUnit.MINUTES,
    label: 'Minuten',
  },
  {
    value: TimeUnit.HOURS,
    label: 'Stunden',
  },
];


export const difficultyOptions = [
  {
    value: Difficulty.EASY,
    label: 'Einfach',
  },
  {
    value: Difficulty.MEDIUM,
    label: 'Mittel',
  },
  {
    value: Difficulty.HARD,
    label: 'Schwer',
  },
];


export const portionUnitOptions = [
  {
    value: PortionUnits.NONE,
    label: 'Keine',
  },
  {
    value: PortionUnits.GRAM,
    label: 'Gramm',
  },
  {
    value: PortionUnits.CUBE,
    label: 'Würfel',
  },
  {
    value: PortionUnits.MILLILITER,
    label: 'Milliliter',
  },
  {
    value: PortionUnits.TEASPOON,
    label: 'Teelöffel',
  },
  {
    value: PortionUnits.TABLESPOON,
    label: 'Esslöffel',
  },
  {
    value: PortionUnits.BALL,
    label: 'Kugel',
  },
  {
    value: PortionUnits.PINCH,
    label: 'Prise',
  },
];
