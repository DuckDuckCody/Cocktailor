import React from 'react';
import PropTypes from 'prop-types';
import CardList from './common/CardList';

const Cocktails = (props) => {
  var style = {
    container: {
      margin: '0 10px'
    },
    header_container: {
      height: '75px',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      marginBottom: '10px',
      borderBottom: '2px #FD295D solid'
    }
  }

  return (
    <div style={style.container}>
      <div style={style.header_container} className="flex-container">
        {/* Title */}
        <p className = "title" style={style.title}>
          Cocktails
        </p>
        {/* end of Title */}
      </div>
      {/* CardList */}
      <CardList
        cocktailClick = {props.cocktailClick}
        cardType = 'cocktail'
        ingredients = {props.ingredients}
        cardData = {props.matchedCocktails}
        keyName = "cocktailId"
        emptyDataTitle = "No cocktails have been matched yet."
        emptyDataDesc = "Add bar supplies to get matched cocktails"
      />
      {/* end of CardList */}
    </div>
  );
}

Cocktails.propTypes = {
  cocktailClick: PropTypes.func.isRequired,
  ingredients: PropTypes.array,
  matchedCocktails: PropTypes.array
}

export default Cocktails;
