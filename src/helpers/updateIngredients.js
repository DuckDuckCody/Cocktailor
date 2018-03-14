import _ from 'lodash';
import {validateIngredient} from './validateIngredients'

export var removeIngredient = function(selectedIngredients, ingredient) {
  return _.filter(selectedIngredients, item => item.ingredientId !== ingredient.ingredientId);
}

export var addIngredient = function(selectedIngredients, ingredient) {
  return {
    selectedIngredients: selectedIngredients.concat(ingredient),
    searchError: false
   }
}
