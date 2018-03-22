import _ from 'lodash';
import React from 'react';
import Typography from 'material-ui/Typography';

export function formatIngredientList(ingredients, cocktailIngredients) {
  let ingredient = null;
  let formattedIngredients = [];

  var listStyle = {
    listStyleType: 'none',
  }

  //todo: try to make this just one map function

  _.forEach(cocktailIngredients, function(cocktailIngredient, index) {
    ingredient = _.find(ingredients, {
      ingredientId: cocktailIngredient.ingredientId
    })

    formattedIngredients.push(
      <li key={ingredient.ingredientId} style={listStyle}>
        <Typography>
          {
            cocktailIngredient.amount
              ? <span> {cocktailIngredient.amount} - </span>
              : ""
          }
          {
            ingredient.selected
              ? <b> {ingredient.name} </b>
              : <span> {ingredient.name} </span>
          }
        </Typography>
      </li>
    )
  });

  return formattedIngredients;
}
