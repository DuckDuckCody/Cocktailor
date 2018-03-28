import React from 'react';
import PropTypes from 'prop-types';
import {formatWikipediaLink} from '../../helpers/formatNames.js'

const IngredientDrawer = (props) => {
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
      borderBottom: '1px #10C0FD solid'
    }
  }

  return (
    <div
      className="drawer animated slideInRight flex-container flex-column align-content-start center-text"
      id="ingredientDrawer"
    >
        <a className="flex-item" onClick={handleClose} style={style.closeIcon}>
          <i className="close-button fa fa-arrow-right float-right"></i>
        </a>

        <h2 className="flex-item" style={style.title}>
          {props.selectedIngredient.name}
        </h2>

        <div className="flex-item">
          <a
            target="_blank"
            className="flex-item grey-text button default-button"
            href={formatWikipediaLink(props.selectedIngredient.name)}
          >
            WIKIPEDIA ARTICLE
          </a>
        </div>
    </div>
  );
}

IngredientDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  selectedIngredient: PropTypes.shape({
    ingredientId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    imgUrl: PropTypes.string
  })
}

export default IngredientDrawer;
