import React, { Component } from 'react';
import CardList from './common/CardList'
import Typography from 'material-ui/Typography';

const Cocktails = (props) => {
  var style = {
    container: {
      margin: '0 10px'
    },
    header_container: {
      height: '60px',
      display: 'flex',
      'flex-flow': 'row nowrap',
      'align-items': 'center',
      'margin-bottom': '10px'
    }
  }

  return (
    <div style={style.container}>
      <div style={style.header_container} className="flex-container">
        {/* Title */}
        <Typography style={style.title} variant='title'>
          <b> Bar Supplies </b>
        </Typography>
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

export default Cocktails;
