import React, { Component } from 'react';
import CardList from './common/CardList';
import Search from './common/Search'
import Toggle from './common/Toggle'

class BarSupplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIngredients: [],
      toggledSearch: false,
      searchError: false,
      searchErrorText: ''
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.dismissWarning = this.dismissWarning.bind(this);
  }

  toggleSearch() {
    let toggled = this.state.toggledSearch;
    this.setState({toggledSearch: !toggled});
  }

  removeIngredient(ingredient) {
    this.props.removeIngredient(ingredient)
    /*
    this.setState(
      {
        currentIngredients: _.filter(this.state.currentIngredients, item => item.ingredientId !== ingredient.ingredientId)
      }
    );
    */
  }

  searchChange(ingredient) {
    this.props.addIngredient(ingredient)
    /*
    let currentIngredients = this.state.currentIngredients;
    this.setState(validateIngredient(currentIngredients, ingredient),
    function() {
      if ( !this.state.searchError ) {
          this.setState({
            currentIngredients: currentIngredients.concat(ingredient),
            searchError: false
          })
      }
    });
    */
  }

  dismissWarning() {
    this.setState({
      searchError: false,
      searchErrorText: ''
    })
  }

  render() {
    let ingredients = this.props.ingredients

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
             inactiveText = "Add Ingredients"
             activeText = "Cancel"
             className = "flex-item flex-basis-25"
          />
          {/* end of Toggle */}
        </div>
        {/* Search */}
        { this.state.toggledSearch
          ? (<Search
              searchValues = {ingredients}
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
          cardData = {this.props.selectedIngredients}
          removeCard = {this.removeIngredient}
          keyName = "ingredientId"
          emptyDataTitle = "No ingredients have been added yet"
          emptyDataDesc = " Click add ingredient to add ingredients to your bar supplies"
          removable = {this.props.removable}
        />
        {/* end of CardList */}
      </div>
    );
  }
}

export default BarSupplies;
