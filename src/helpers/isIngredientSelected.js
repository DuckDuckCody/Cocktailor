import _ from 'lodash';

export var isIngredientSelected = function(selectedIngredientId, ingredients) {
  let foundIngredient = _.find(ingredients, {ingredientId: selectedIngredientId}).selected
  if (_.isUndefined(foundIngredient)) {
    return false;
  } else {
    return foundIngredient;
  }
}
