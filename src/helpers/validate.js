import _ from 'lodash';

export var validateIngredient = function(currentIngredients, ingredient) {
  if ( !ingredient || ingredient === '') {
    return ({
      searchError: true,
      searchErrorText: "A ingredient needs to be selected before pressing add."
    });
  } else if (
    !_.isUndefined(
      _.find(
        currentIngredients,
        {ingredientId: ingredient.ingredientId}
      )
    )
  ) {
    return ({
      searchError: true,
      searchErrorText: "This ingredient already exists in your supplies"
    });
  } else {
    return ({
      searchError: false,
      searchErrorText: ''
    })
  }
}
