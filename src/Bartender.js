import React, {Component} from 'react';
import BarSupplies from './components/BarSupplies'
import Cocktails from './components/Cocktails'
import CocktailDrawer from './components/common/CocktailDrawer'
import ingredients from './assets/data/ingredients.js'
import cocktails from './assets/data/cocktails.js'
import {validateIngredient} from './helpers/validateIngredients.js'
import {matchCocktails} from './helpers/matchCocktails.js'
import {removeIngredient, addIngredient} from './helpers/updateIngredients.js'
import {sortCocktails} from './helpers/sortCocktails.js'

class CocktailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ingredients,
      cocktails: cocktails,
      matchedCocktails: [],
      selectedCocktail: null
    }
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.cocktailClick = this.cocktailClick.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  removeIngredient(ingredient) {
    this.setState(removeIngredient(ingredient, this.state.ingredients), function() {
      this.setState(matchCocktails(this.state.cocktails, this.state.ingredients))
    });
  }

  addIngredient(ingredient) {
    this.setState(validateIngredient(this.state.ingredients, ingredient), function() {
      if (!this.state.searchError) {
        this.setState(addIngredient(ingredient, this.state.ingredients), function() {
          this.setState(matchCocktails(this.state.cocktails, this.state.ingredients))
          //sortCocktails(this.state.selectedIngredients, this.state.matchedCocktails);
        })
      }
    });
  }

  cocktailClick(cocktail) {
    this.setState({ selectedCocktail: cocktail });
  }

  closeDrawer() {
    this.setState({ selectedCocktail: null });
  }

  render() {
    return (
      <div>
        <div className="App flex-container">
          <div className="flex-item flex-basis-50">
            <BarSupplies
              ingredients={this.state.ingredients}
              addIngredient={this.addIngredient}
              removeIngredient={this.removeIngredient}
            />
          </div>
          <div className="flex-item flex-basis-50">
            <Cocktails
              ingredients={this.state.ingredients}
              matchedCocktails={this.state.matchedCocktails}
              cocktailClick={this.cocktailClick}
            />
          </div>
        </div>
        {this.state.selectedCocktail
          ? (
            <CocktailDrawer
              title = {this.state.selectedCocktail.name}
              ingredients = {this.state.ingredients}
              cocktailingredients = {this.state.selectedCocktail.ingredients}
              method = {this.state.selectedCocktail.method}
              closeDrawer = {this.closeDrawer}
            />
          )
          : ''
        }
      </div>
    );
  }
}

export default CocktailBar;
