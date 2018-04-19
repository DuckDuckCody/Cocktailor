import React from 'react';
import PropTypes from 'prop-types';
import {formatIngredientWikiLink} from '../../helpers/formatNames.js'
import {isIngredientSelected} from '../../helpers/isIngredientSelected.js'

const IngredientDrawer = (props) => {
  function handleClose(e) {
    e.preventDefault();
    props.closeDrawer();
  }

  function handleAdd(e) {
    e.preventDefault();
    props.addIngredient(props.selectedIngredient)
  }

  const style = {
    closeIcon: {
      padding: "10px 10px 0 0"
    },
    title: {
      padding: "15px 0"
    },
    wikiButton: {
      marginTop: "25px"
    },
    addIngredientButton: {
      marginTop: "25px"
    }
  }

  let ingredientIsSelected = isIngredientSelected(props.selectedIngredient.ingredientId, props.ingredients)

  return (
    <div
      className="drawer animated slideInRight flex-container flex-column align-content-start center-text"
      id="ingredientDrawer"
    >
        <a className="flex-item" onClick={handleClose} style={style.closeIcon}>
          <i className="close-button fa fa-times float-right"></i>
        </a>

        <h2 className="flex-item" style={style.title}>
          {props.selectedIngredient.name}
        </h2>

        <div className="flex-item" style={style.wikiButton}>
          <a
            target="_blank"
            className="flex-item button default-button"
            href={formatIngredientWikiLink(props.selectedIngredient.name)}
          >
            WIKIPEDIA ARTICLE
          </a>
        </div>

        {
          !ingredientIsSelected
            ? (
              <div
                className="flex-item"
                style={style.addIngredientButton}
              >
                <button type="button" onClick={handleAdd} className="button default-button">
                  ADD INGREDIENT TO BAR SUPPLIES
                </button>
              </div>
            )
            : ""
        }
    </div>
  );
}

IngredientDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
  selectedIngredient: PropTypes.shape({
    ingredientId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    imgUrl: PropTypes.string
  })
}

export default IngredientDrawer;
