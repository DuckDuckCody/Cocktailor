import React from 'react';
import PropTypes from 'prop-types';
import {formatIngredientList, formatCocktailWikiLink} from '../../helpers/formatNames.js'

const CocktailDrawer = (props) => {
  function handleClose(e) {
    e.preventDefault();
    props.closeDrawer();
  }

  const style = {
    list: {
      padding: "15px 0"
    },
    closeIcon: {
      padding: "10px 10px 0 0"
    },
    title: {
      padding: "15px 0",
      borderBottom: '1px #FD295D solid'
    },
    method: {
      padding: "25px 25px"
    }
  }

  return (
    <div
      className="drawer animated slideInRight flex-container flex-column align-content-start center-text"
      id="cocktailDrawer"
    >
        <a className="flex-item" onClick={handleClose} style={style.closeIcon}>
          <i className="close-button fa fa-times float-right"></i>
        </a>

        <h2 className="flex-item" style={style.title}>
          {props.selectedCocktail.name}
        </h2>

        <ul className="flex-item" style={style.list}>
          {formatIngredientList(
            props.ingredients,
            props.selectedCocktail.ingredients,
            props.ingredientClick
          )}
        </ul>

        <p className="flex-item" style={style.method}>
          {props.selectedCocktail.method}
        </p>

        <div className="flex-item">
          <a
            target="_blank"
            className="flex-item button default-button"
            href={formatCocktailWikiLink(props.selectedCocktail.name)}
          >
            WIKIPEDIA ARTICLE
          </a>
        </div>

    </div>
  );
}

CocktailDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  ingredientClick: PropTypes.func.isRequired,
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
