import React, { Component } from 'react';
import _ from 'lodash';
import CardList from './CardList';
import Search from './Search'
import Toggle from './Toggle'
import ingredients from '../assets/data/ingredients.js'
import {validateIngredient} from '../helpers/validate.js'

class BarSupplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIngredients: [],
      toggledSearch: false
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.dismissWarning = this.dismissWarning.bind(this);
  }

  toggleSearch() {
    let toggled = this.state.toggledSearch;
    this.setState({toggledSearch: !toggled});
  }

  removeIngredient(ingredientId) {
    let updateIngredients = this.state.currentIngredients;
    _.remove(updateIngredients, {ingredientId: ingredientId});
    this.setState({
      currentIngredients: updateIngredients
    })
  }

  addIngredient(e, ingredient) {
    let currentIngredients = this.state.currentIngredients;
    this.setState(validateIngredient(currentIngredients, ingredient),
    function() {
      if ( !this.state.searchError ) {
          currentIngredients.push(ingredient);
          this.setState({
            currentIngredients: currentIngredients,
            searchError: false,
            toggledSearch: false
          })
      }
    });
  }

  searchChange() {
    this.dismissWarning();
  }

  dismissWarning() {
    this.setState({
      searchError: false,
      searchErrorText: ''
    })
  }

  render() {
    return (
      <div className="card-conatiner">
        <div className="flex-container jumbotron">
          <span className="flex-item flex-basis-75">
            Bar Supplies
          </span>
          <Toggle
             onToggle = {this.toggleSearch}
             toggled = {this.state.toggledSearch}
             inactiveText = "Add Ingredient"
             activeText = "Cancel"
             className = "flex-item flex-basis-25"
          />
        </div>
        { this.state.toggledSearch
          ? (
            <Search
              searchValues = {ingredients}
              onAdd = {this.addIngredient}
              handleChange = {this.searchChange}
              error = {this.state.searchError}
              errorText = {this.state.searchErrorText}
              dismissWarning = {this.dismissWarning}
            />
          )
          : ''
        }
        <CardList
          ingredients={this.state.currentIngredients}
          removeIngredient={this.removeIngredient}
          emptyTextTitle = "No ingredients have been added yet"
          emptyTextDesc = " Click add ingredient to add ingredients to your bar supplies"
        />
      </div>
    );
  }
}

export default BarSupplies;
