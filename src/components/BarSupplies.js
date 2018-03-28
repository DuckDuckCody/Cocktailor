import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardList from './common/CardList';
import Search from './common/Search';

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
      headerContainer: {
        height: '20vh'
      },
      titleContainer: {
        height: '75px',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginBottom: '10px',
        borderBottom: '2px #10C0FD solid'
      },
      title: {
        flex: '100%',
        color: 'white'
      },
      search: {
        flex: '100%'
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

          <div style={style.item}>
            <Search
              searchValues = {this.props.ingredients}
              handleChange = {this.searchChange}
              error = {this.props.searchError}
              errorText = {this.props.searchErrorText}
              dismissWarning = {this.props.dismissWarning}
              labelKey = "name"
              valueKey = "ingredientId"
              placeholder = "Ingredient search"
            />
          </div>
        </div>

        <CardList
          cardType = 'ingredient'
          cardData = {this.props.ingredients}
          removeCard = {this.removeIngredient}
          keyName = "ingredientId"
          emptyDataTitle = "No ingredients have been added yet"
          emptyDataDesc = " Click add ingredient to add ingredients to your bar supplies"
          ingredientClick = {this.props.ingredientClick}
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
  dismissWarning: PropTypes.func
}

export default BarSupplies;
