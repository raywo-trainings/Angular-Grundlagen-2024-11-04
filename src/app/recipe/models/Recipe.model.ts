import {Ingredient} from "./Ingredient.model";
import {Duration} from "./Duration.model";
import {Difficulty} from "./Difficulty.model";
import {TimeUnit} from './TimeUnit.model';


export interface Recipe {

  id?: string
  name: string
  img: string
  servings: number
  lastEdited: string
  ingredients: Ingredient[]
  preparation: string
  difficulty: Difficulty
  duration: Duration

}


export interface RecipeDTO {

  id?: string
  name: string
  img: string
  portions: number
  lastEdited: string
  ingredients: Ingredient[]
  preparation: string
  level_of_difficulty: Difficulty
  duration: Duration

}


export function createEmptyRecipe(): Recipe {
  return {
    id: undefined,
    name: "",
    img: "",
    servings: 0,
    lastEdited: "",
    ingredients: [],
    preparation: "",
    difficulty: Difficulty.EASY,
    duration: {
      unit: TimeUnit.MINUTES,
      value: 0
    }
  }
}
