import {Recipe, RecipeDTO} from '../models/Recipe.model';


export function mapRecipeDTOToRecipe(dto: RecipeDTO): Recipe {
  return {
    id: dto.id,
    name: dto.name,
    img: dto.img,
    servings: dto.portions,
    lastEdited: dto.lastEdited,
    ingredients: dto.ingredients,
    preparation: dto.preparation,
    difficulty: dto.level_of_difficulty,
    duration: dto.duration
  }
}


export function mapRecipeToRecipeDTO(recipe: Recipe): RecipeDTO {
  return {
    id: recipe.id,
    name: recipe.name,
    img: recipe.img,
    portions: recipe.servings,
    lastEdited: recipe.lastEdited,
    ingredients: recipe.ingredients,
    preparation: recipe.preparation,
    level_of_difficulty: recipe.difficulty,
    duration: recipe.duration
  }
}
