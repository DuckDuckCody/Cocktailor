import React from 'react';
import PropTypes from 'prop-types';
import {formatIngredientList} from '../../helpers/formatNames'
import Card, { CardContent, CardMedia } from 'material-ui/Card';

const CocktailCard = (props) => {
  function handleMethodClick(e) {
    e.preventDefault();
    props.cocktailClick(props.cardData);
  }

  function handleIngredientClick(ingredient) {
    props.ingredientClick(ingredient);
  }

  var style = {
    card: {
      margin: '10px 0',
      backgroundColor: 'rgb(47, 47, 49)',
      color: 'white'
    },
    wikipedia: {
      color: 'rgb(153, 153, 153)',
      fontSize: '1em'
    },
    img: {
      height: '150px',
      width: '150px',
      backgroundSize: 'contain'
    },
    paddingBottom: {
      paddingBottom: '5px'
    }
  };

  return (
    <div>
      <Card className="flex-container justify-content-space-evenly align-items-center center-text" style={style.card}>
        <div className="flex-container flex-column flex-item flex-basis-66">
          <CardContent>
            <p
              className="flex-item text large-text white-text hover-underline"
              onClick={handleMethodClick}
            >
              {props.cardData.name}
            </p>

            <div className="flex-item white-text" style={style.paddingBottom}>
              <ul>
                {
                  formatIngredientList(
                    props.ingredients,
                    props.cardData.ingredients,
                    handleIngredientClick
                  )
                }
              </ul>
            </div>
            <div className="flex-item" style={style.padding_bottom}>
              <button
                type="button"
                className="flex-item button default-button"
                onClick={handleMethodClick}
              >
                VIEW COCKTAIL
              </button>
            </div>
          </CardContent>
        </div>
        <CardMedia
          className="flex-item flex-basis-33 clickable"
          onClick = {handleMethodClick}
          style={style.img}
          image={props.cardData.imgUrl}
          title={props.cardData.name}
          alt={props.cardData.name}
        />
      </Card>
    </div>
  );
};

CocktailCard.propTypes = {
  cocktailClick: PropTypes.func.isRequired,
  ingredientClick: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
  cardData: PropTypes.shape({
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

export default CocktailCard;
