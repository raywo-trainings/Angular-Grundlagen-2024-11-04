import {Component, effect, inject, input, untracked} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {difficultyOptions, IngredientForm, portionUnitOptions, RecipeForm, timeUnitOptions} from '../../models/recipe-form.model';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';
import {TimeUnit} from '../../models/TimeUnit.model';
import {PortionUnits} from '../../models/PortionUnit.model';
import {Difficulty} from '../../models/Difficulty.model';
import {Recipe} from '../../models/Recipe.model';
import {MarkInvalidDirective} from '../../../shared/directives/mark-invalid.directive';


@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MarkInvalidDirective
  ],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss'
})
export class RecipeEditComponent {

  protected recipeForm: FormGroup<RecipeForm>;
  protected timeUnitOptions = timeUnitOptions;
  protected difficultyOptions = difficultyOptions;
  protected portionOptions = portionUnitOptions;
  protected recipeId = input<string>()

  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly recipeService = inject(RecipeService);
  private readonly router = inject(Router);
  private recipeToEdit: Recipe | undefined


  constructor() {
    this.recipeForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      servings: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
      duration: this.formBuilder.group({
        value: [0, [Validators.required, Validators.min(0), Validators.max(120)]],
        unit: [TimeUnit.MINUTES, [Validators.required]]
      }),
      ingredients: this.formBuilder.array([
        this.createIngredientFormGroup(),
        this.createIngredientFormGroup()
      ]),
      difficulty: [Difficulty.EASY, [Validators.required]],
      preparation: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]]
    })

    effect(() => {
      const id = this.recipeId()

      if (!id) return

      untracked(() => this.recipeService.getRecipe(id)
        .subscribe(recipe => {
          this.recipeToEdit = recipe
          this.recipeToEdit.ingredients.forEach((ingredient, index) => {
            if (index > 1) {
              this.recipeForm.controls.ingredients.push(
                this.createIngredientFormGroup()
              )
            }
          })
          this.recipeForm.patchValue(this.recipeToEdit)
        })
      )
    });
  }


  private createIngredientFormGroup(): FormGroup<IngredientForm> {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      unit: [PortionUnits.NONE],
      quantity: [1, [Validators.required, Validators.min(0.1)]],
    })
  }


  protected readonly portionUnitOptions = portionUnitOptions;


  onSubmit() {
    // Fülle Rezept mit Werten aus Formular
    let recipe = {
      ...this.recipeForm.getRawValue(),
      img: "/recipe_pictures/default.jpg",
      lastEdited: new Date().toISOString()
    } as Recipe

    if (this.recipeToEdit) {
      recipe.id = this.recipeToEdit.id
      this.recipeService.updateRecipe(recipe)
        .subscribe(() => {
          this.router.navigate(["recipes", recipe.id])
        })
    } else {
      this.recipeService.addRecipe(recipe)
        .subscribe(() => {
          this.router.navigate(["recipes"])
        })
    }
  }


  onCancel() {
    console.log("Abbrechen")
  }


  protected removeIngredientFormGroup(index: number) {
    this.recipeForm.controls.ingredients.removeAt(index);
  }


  protected addIngredientFormGroup() {
    this.recipeForm.controls.ingredients.push(this.createIngredientFormGroup());
  }
}
