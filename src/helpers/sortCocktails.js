import _ from 'lodash';

export function sortCocktails(ingredients, matchedCocktails) {
  var selectedIngredients = 0;
  var cocktailBuffer = _.cloneDeep(matchedCocktails);

  _.forEach(cocktailBuffer, function(cocktail) {
    selectedIngredients = 0;
    _.forEach(cocktail.ingredients, function(cocktailIngredient) {
      _.find(ingredients, {ingredientId: cocktailIngredient.ingredientId}).selected
        ? selectedIngredients += 1
        : "";
    })
    cocktail.numberOfSelectedIngredients = selectedIngredients
  })

  return ({
    matchedCocktails: _.orderBy(
      cocktailBuffer, ['numberOfSelectedIngredients', 'name'], ['desc', 'asc']
    )
  });
}
