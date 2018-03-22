import _ from 'lodash';

export var matchCocktails = function(cocktails, ingredients) {
  let matchedCocktails = [];
  let cocktailIngredientIds = [];
  let ingredientIds = ingredients.map(ingredient => {
    if(ingredient.selected) {
      return ingredient.ingredientId
    }
  });

  _.forEach(cocktails, function(cocktail) {
    cocktailIngredientIds = cocktail.ingredients.map(ingredient => ingredient.ingredientId)
      findOne(ingredientIds, cocktailIngredientIds)
        ? matchedCocktails.push(cocktail)
        : "";
  })

  return {matchedCocktails: matchedCocktails}
}


function findOne(haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};
