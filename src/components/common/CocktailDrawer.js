import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import {formatIngredientList} from '../../helpers/formatIngredients.js'

const CocktailDrawer = (props) => {
  function handleClose(e) {
    e.preventDefault();
    props.closeDrawer();
  }

  const style = {
    padding: {
      padding: "15px 0"
    },
    methodPadding: {
      padding: "25px 25px"
    }
  }

  return (
    <div className="flex-container drawer animated slideInRight center-text flex-wrap align-content-start">
        <a className="flex-item flex-basis-100" onClick={handleClose}>
          <i className="close-button fa fa-close float-right"></i>
        </a>

        <Typography variant="title" className="flex-item flex-basis-100" style={style.padding}>
          {props.selectedCocktail.name}
        </Typography>

        <ul className="flex-item flex-basis-100" style={style.padding}>
          {formatIngredientList(
            props.ingredients,
            props.selectedCocktail.ingredients
          )}
        </ul>

        <Typography style={style.methodPadding}>
          {props.selectedCocktail.method}
        </Typography>
    </div>
  );
}

CocktailDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
  selectedCocktail: PropTypes.shape({
    cocktailId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    method: PropTypes.string,
    imgUrl: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      ingredientId: PropTypes.number.isRequired,
      amount: PropTypes.string,
    }))
  })
}

export default CocktailDrawer;
