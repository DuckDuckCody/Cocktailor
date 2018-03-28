import _ from 'lodash';

export var removeIngredient = function(ingredient, ingredients) {
  let ingredientsBuffer = _.clone(ingredients);
  _.find(ingredientsBuffer, {ingredientId: ingredient.ingredientId}).selected = false;
  return ({ingredients: ingredientsBuffer});
}

export function addIngredient(ingredient, ingredients) {
  let ingredientsBuffer = _.clone(ingredients.ingredients);
  _.find(ingredientsBuffer, {ingredientId: ingredient.ingredientId}).selected = true;
  return ({ingredients: ingredientsBuffer});
}
