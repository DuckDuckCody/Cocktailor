import React from 'react';
import {formatIngredientList} from '../../helpers/formatIngredients'
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const CocktailCard = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.cocktailClick(props.cardData);
  }

  var style = {
    card: {
      margin: '10px 0'
    },
    img: {
      height: '151px',
      width: '151px'
    },
    'padding_bottom': {
      'padding-bottom': '5px'
    }
  };

  return (
    <div>
      <Card className="flex-container justify-content-space-evenly align-items-center center-text" style={style.card}>
        <div className="flex-container flex-column flex-item flex-basis-66">
          <CardContent>
            <Typography style={style.padding_bottom} variant="headline" className="flex-item">
              {props.cardData.name}
            </Typography>
            <div className="flex-item" style={style.padding_bottom}>
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
              <Button type="button" onClick={handleClick}>
                View Cocktail
              </Button>
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

export default CocktailCard;
