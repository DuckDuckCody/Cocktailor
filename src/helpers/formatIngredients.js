import _ from 'lodash';
import React from 'react';
import Typography from 'material-ui/Typography';

export function formatIngredientList(ingredients, cocktailIngredients) {
  let ingredient = null;
  let formattedIngredients = [];

  var listStyle = {
    listStyleType: 'none',
    padding: '5px 0'
  }

  //todo: try to make this just one map function

  _.forEach(cocktailIngredients, function(cocktailIngredient, index) {
    ingredient = _.find(ingredients, {
      ingredientId: cocktailIngredient.ingredientId
    })

    formattedIngredients.push(
      <li key={ingredient.ingredientId} style={listStyle} className={ingredient.selected ? 'bold underline' : null}>
          {
            cocktailIngredient.amount
              ? <span> {cocktailIngredient.amount} - </span>
              : ""
          }
          <span> {ingredient.name} </span>
      </li>
    )
  });

  return formattedIngredients;
}
