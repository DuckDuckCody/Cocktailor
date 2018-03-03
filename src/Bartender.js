import React, {Component} from 'react';
import BarSupplies from './components/BarSupplies'
import Cocktails from './components/Cocktails'
import ingredients from './assets/data/ingredients.js'
import cocktails from './assets/data/cocktails.js'
import {validateIngredient} from './helpers/validateIngredients.js'
import {matchCocktails} from './helpers/matchCocktails.js'
import {removeIngredient, addIngredient} from './helpers/updateIngredients.js'
import _ from 'lodash';

class CocktailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ingredients,
      selectedIngredients: [],
      cocktails: cocktails,
      matchedCocktails: []
    }
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  removeIngredient(ingredient) {
    this.setState({
      selectedIngredients: removeIngredient(this.state.selectedIngredients, ingredient)
    }, function() {
      this.setState({
        matchedCocktails: matchCocktails(this.state.cocktails, this.state.selectedIngredients)
      })
    });
  }

  addIngredient(ingredient) {
    let selectedIngredients = this.state.selectedIngredients;
    this.setState(validateIngredient(selectedIngredients, ingredient), function() {
      if (!this.state.searchError) {
        this.setState(addIngredient(selectedIngredients, ingredient), function() {
          this.setState({
            matchedCocktails: matchCocktails(this.state.cocktails, this.state.selectedIngredients)
          })
        })
      }
    });
  }

  render() {
    return (<div className="App flex-container">
      <div className="flex-item flex-basis-50">
        <BarSupplies ingredients={this.state.ingredients} selectedIngredients={this.state.selectedIngredients} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
      </div>
      <div className="flex-item flex-basis-50">
        <Cocktails selectedIngredients={this.state.selectedIngredients} ingredients={this.state.ingredients} matchedCocktails={this.state.matchedCocktails}/>
      </div>
    </div>);
  }
}

export default CocktailBar;
