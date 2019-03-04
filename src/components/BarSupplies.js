import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardList from './common/CardList';

class BarSupplies extends Component {
  constructor(props) {
    super(props);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  removeIngredient(ingredient) {
    this.props.removeIngredient(ingredient)
  }

  searchChange(ingredient) {
    this.props.addIngredient(ingredient)
  }

  render() {
    var style = {
      pad: {
        margin: '0 10px'
      },
      titleContainer: {
        display: 'flex',
        textAlign: 'center'
      },
      title: {
        flex: '100%',
        color: 'white'
      }
    }

    return (
      <div style={style.pad}>
        <div className="headerContainer">
          <div style={style.titleContainer}>
            <p className = "title" style={style.title}>
              Bar Supplies
            </p>
          </div>
        </div>

        <CardList
          cardType = 'ingredient'
          cardData = {this.props.ingredients}
          removeCard = {this.removeIngredient}
          keyName = "ingredientId"
          emptyDataTitle = "No bar supplies have been added yet"
          emptyDataDesc = "Click the plus button in the bottom right corner to add bar supplies"
          ingredientClick = {this.props.ingredientClick}
          inPhoneLayout = {this.props.inPhoneLayout}
        />
      </div>
    );
  }
}

BarSupplies.propTypes = {
  ingredientClick: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.array,
  searchErrorText: PropTypes.string,
  searchError: PropTypes.bool,
  dismissWarning: PropTypes.func,
  inPhoneLayout: PropTypes.bool
}

export default BarSupplies;
