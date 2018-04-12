import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IngredientCard from './IngredientCard'
import CocktailCard from './CocktailCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash'

class IngredientCardList extends Component {
  render() {
    const style = {
      phonePadding: {
        paddingBottom: "10vh"
      }
    }

    let cards = null;
    if (this.props.cardData.length > 0) {
      switch (this.props.cardType) {
        case 'ingredient':
          let selectedIngredients = _.filter(this.props.cardData, {selected: true})
          console.log('selectedIngredients')
          console.log(selectedIngredients)
          if (selectedIngredients.length !== 0) {
            console.log('mapping ingredients')
            cards = selectedIngredients.map((ingredient) => {
              if (ingredient.selected) {
                return (
                  <IngredientCard
                    cardData = {ingredient}
                    key = {ingredient[this.props.keyName]}
                    removeCard = {this.props.removeCard}
                    ingredientClick = {this.props.ingredientClick}
                  />
                )
              }
            });
          }
          break;
        case 'cocktail':
          cards = this.props.cardData.map((data) =>
            <CocktailCard
              cardData = {data}
              key = {data[this.props.keyName]}
              ingredients = {this.props.ingredients}
              cocktailClick = {this.props.cocktailClick}
              ingredientClick = {this.props.ingredientClick}
            />
          );
          break;
        default:
          cards = <p>
            Unrecognised Card Type
          </p>
      }
    }

    if (cards === null || cards.length === 0) {
      cards = (<div className="empty-data-container">
        <h3>
          {this.props.emptyDataTitle}
        </h3>
        <p>
          {this.props.emptyDataDesc}
        </p>
      </div>);
    }

    return (
      <div className="scrollable cardList" id={this.props.cardType}>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {cards}
        </ReactCSSTransitionGroup>
        {
          this.props.inPhoneLayout
            ? <div style={style.phonePadding}></div>
            : ""
        }
      </div>
    );
  }
}

IngredientCardList.propTypes = {
  cardData: PropTypes.array.isRequired,
  cardType: PropTypes.oneOf(['ingredient', 'cocktail']),
  keyName: PropTypes.string.isRequired,
  removeCard: PropTypes.func,
  ingredients: PropTypes.array,
  cocktailClick: PropTypes.func,
  ingredientClick: PropTypes.func,
  emptyDataTitle: PropTypes.string.isRequired,
  emptyDataDesc: PropTypes.string.isRequired,
  inPhoneLayout: PropTypes.bool
}

export default IngredientCardList;
