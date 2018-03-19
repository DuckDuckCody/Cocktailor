import React from 'react';
import Typography from 'material-ui/Typography';
import {formatIngredientList} from '../../helpers/formatIngredients.js'

const CocktailDrawer = (props) => {
  function handleClose(e) {
    e.preventDefault();
    props.closeDrawer();
  }

  return (
    <div className="flex-container drawer animated slideInRight center-text flex-wrap align-content-start">
        <a className="flex-item flex-basis-100" onClick={handleClose}>
          <i className="close-button fa fa-close float-right"></i>
        </a>
        <Typography variant="title" className="flex-item flex-basis-100">
          {props.selectedCocktail.name}
        </Typography>
        <ul className="flex-item flex-basis-100">
          {formatIngredientList(
            props.ingredients,
            props.selectedCocktail.ingredients
          )}
        </ul>
        <Typography>
          {props.selectedCocktail.method}
        </Typography>
    </div>
  );
}

export default CocktailDrawer;
