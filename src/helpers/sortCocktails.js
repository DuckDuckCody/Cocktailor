import _ from 'lodash';

export function sortCocktails(selectedIngredients, matchedCocktails) {
 let cocktails = _.clone(matchedCocktails);

 _.forEach(cocktails, function(cocktail) {
   _.forEach(cocktail.ingredients, function(ingredient) {
     ingredient.selected = !_.isUndefined(_.find(selectedIngredients, {ingredientId: ingredient.ingredientId}))
   })
 })

 console.log('cocktails in sortCocktail method');
 console.log(cocktails)
}
