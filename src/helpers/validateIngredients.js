import _ from 'lodash';

export function validateIngredient(ingredients, ingredient) {
  if (
    !_.isUndefined(
      _.find(
        ingredients,
        {ingredientId: ingredient.ingredientId, selected: true}
      )
    )
  ) {
    return ({
      searchError: true,
      searchErrorText: ingredient.name + " already exists in your supplies"
    });
  } else {
    return ({
      searchError: false,
      searchErrorText: ''
    })
  }
}
