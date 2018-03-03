import _ from 'lodash';

export var formatIngredientNames = function(ingredients, selectedIngredients, cocktailIngredients) {
  let foundIngredient = null;
  let ingredientNames = {};
  _.forEach(cocktailIngredients, function(cocktailIngredient) {
    console.log(cocktailIngredient);
    foundIngredient = _.find(selectedIngredients, {ingredientId: cocktailIngredient})
    _.isUndefined(foundIngredient)
      ? foundIngredient =_.find(ingredients, {ingredientId: cocktailIngredient})
      : foundIngredient
    console.log('foundIngredient')
    console.log(foundIngredient)
  })

/*
  return cocktailIngredients.map((cocktailIngredient) =>
    _.isUndefined(_.find(selectedIngredients, {ingredientId: cocktailIngredient}))
      ? _.find(selectedIngredients, {ingredientId: cocktailIngredient}).name
      : _.find(ingredients, {ingredientId: cocktailIngredient}).name
  ).join(', ');
  */
}
