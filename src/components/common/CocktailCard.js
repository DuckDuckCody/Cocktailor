import React from 'react';
import PropTypes from 'prop-types';
import {formatIngredientList} from '../../helpers/formatIngredients'
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const CocktailCard = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.cocktailClick(props.cardData);
  }

  var style = {
    card: {
      margin: '10px 0',
      backgroundColor: 'rgb(47, 47, 49)',
      color: 'white'
    },
    img: {
      height: '151px',
      width: '151px'
    },
    'padding_bottom': {
      paddingBottom: '5px'
    }
  };

  return (
    <div>
      <Card className="flex-container justify-content-space-evenly align-items-center center-text" style={style.card}>
        <div className="flex-container flex-column flex-item flex-basis-66">
          <CardContent>
            <p className="flex-item text large-text white-text">
              {props.cardData.name}
            </p>

            <div className="flex-item white-text" style={style.padding_bottom}>
              <ul>
                {
                  formatIngredientList(
                    props.ingredients,
                    props.cardData.ingredients
                  )
                }
              </ul>
            </div>
            <div className="flex-item" style={style.padding_bottom}>
              <button
                type="button"
                className="flex-item grey-text button default-button"
                onClick={handleClick}
              >
                VIEW COCKTAIL
              </button>
            </div>
          </CardContent>
        </div>
        <CardMedia style={style.img} className="flex-item flex-basis-33"
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
