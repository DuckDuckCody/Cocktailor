import _ from 'lodash';

export var matchCocktails = function(cocktails, ingredients) {
  let matchedCocktails = [];
  let ingredientIds = ingredients.map(ingredient => ingredient.ingredientId);
  let cocktailIngredientIds = [];

  _.forEach(cocktails, function(cocktail) {
    cocktailIngredientIds = cocktail.ingredients.map(ingredient => ingredient.ingredientId)
    findOne(ingredientIds, cocktailIngredientIds)
      ? matchedCocktails.push(cocktail)
      : "";
  })

  return matchedCocktails
}


function findOne(haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};
