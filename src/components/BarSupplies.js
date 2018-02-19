import React, { Component } from 'react';
import _ from 'lodash';
import CardList from './common/CardList';
import Search from './common/Search'
import Toggle from './common/Toggle'
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

  removeIngredient(ingredient) {
    let updateIngredients = this.state.currentIngredients;
    _.pull(updateIngredients, ingredient);
    this.setState({currentIngredients: updateIngredients});
  }

  addIngredient(e, ingredient) {
    let currentIngredients = this.state.currentIngredients;
    this.setState(validateIngredient(currentIngredients, ingredient),
    function() {
      if ( !this.state.searchError ) {
          currentIngredients.push(ingredient);
          this.setState({
            currentIngredients: currentIngredients,
            searchError: false
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
          {/* Title */}
          <span className="flex-item flex-basis-75">
            Bar Supplies
          </span>
          {/* end of Title */}
          {/* Toggle search button */}
          <Toggle
             onToggle = {this.toggleSearch}
             toggled = {this.state.toggledSearch}
             inactiveText = "Add Ingredient"
             activeText = "Cancel"
             className = "flex-item flex-basis-25"
          />
          {/* end of Toggle */}
        </div>
        {/* Search */}
        { this.state.toggledSearch
          ? (<Search
              searchValues = {ingredients}
              onAdd = {this.addIngredient}
              handleChange = {this.searchChange}
              error = {this.state.searchError}
              errorText = {this.state.searchErrorText}
              dismissWarning = {this.dismissWarning}
              labelKey = "name"
              valueKey = "ingredientId"
            />
          ) : ''
        }
        {/* end of Search */}
        {/* CardList */}
        <CardList
          cardData = {this.state.currentIngredients}
          keyName = "ingredientId"
          removeCard = {this.removeIngredient}
          emptyDataTitle = "No ingredients have been added yet"
          emptyDataDesc = " Click add ingredient to add ingredients to your bar supplies"
        />
        {/* end of CardList */}
      </div>
    );
  }
}

export default BarSupplies;
