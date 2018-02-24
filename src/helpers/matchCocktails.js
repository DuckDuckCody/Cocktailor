import _ from 'lodash';

export var matchCocktails = function(cocktails, ingredients) {
  let matchedCocktails = [];
  let ingredientIds = ingredients.map(ingredient => ingredient.ingredientId);
  
  _.forEach(cocktails, function(cocktail) {
    findOne(ingredientIds, cocktail.ingredients)
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
