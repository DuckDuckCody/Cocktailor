import React, { Component } from 'react';
import _ from 'lodash';
import Title from './Title';
import CardList from './CardList';
import Search from './Search'
import ingredients from '../assets/data/ingredients.js'
import {validateIngredient} from './validate.js'

class BarSupplies extends Component {
  constructor(props) {
    super(props);
    this.state = {currentIngredients: []};
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.dismissWarning = this.dismissWarning.bind(this);
  }

  removeIngredient(e, ingredientId) {
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
          })
      }
    });
  }

  dismissWarning(e) {
    console.log('dismisswarning')
    this.setState({
      searchError: false,
      searchErrorText: ''
    })
  }

  render() {
    return (
      <div className="card-conatiner">
        <Title title="Bar Supplies" />
        <Search
          searchValues = {ingredients}
          onAdd = {this.addIngredient}
          error = {this.state.searchError}
          errorText = {this.state.searchErrorText}
          dismissWarning = {this.dismissWarning}
         />
        <CardList
          ingredients={this.state.currentIngredients}
          removeIngredient={this.removeIngredient}
        />
      </div>
    );
  }
}

export default BarSupplies;
