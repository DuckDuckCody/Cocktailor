import React, { Component } from 'react';
import CardList from './common/CardList';
import Search from './common/Search'
import Toggle from './common/Toggle'

class BarSupplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  searchChange(ingredient) {
    this.props.addIngredient(ingredient)
  }

  dismissWarning() {
    this.setState({
      searchError: false,
      searchErrorText: ''
    })
  }

  render() {
    return (
      <div>
        <div className="flex-container flex-wrap jumbotron">
          {/* Title */}
          <span className="flex-item flex-basis-75">
            <h2> Bar Supplies </h2>
          </span>
          {/* end of Title */}
          {/* Toggle search button */}
          <Toggle
             onToggle = {this.toggleSearch}
             toggled = {this.state.toggledSearch}
             inactiveText = "Add Ingredients"
             activeText = "Cancel"
             className = "flex-item flex-basis-25 toggle-button"
          />
          {/* end of Toggle */}
          {/* Search */}
          { this.state.toggledSearch
            ? (<Search
                searchValues = {this.props.ingredients}
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
        </div>
        {/* CardList */}
        <CardList
          cardType = 'ingredient'
          cardData = {this.props.ingredients}
          removeCard = {this.removeIngredient}
          keyName = "ingredientId"
          emptyDataTitle = "No ingredients have been added yet"
          emptyDataDesc = " Click add ingredient to add ingredients to your bar supplies"
        />
        {/* end of CardList */}
      </div>
    );
  }
}

export default BarSupplies;
