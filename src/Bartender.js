import React, {Component} from 'react';
import BarSupplies from './components/BarSupplies'
import Cocktails from './components/Cocktails'
import CocktailDrawer from './components/common/CocktailDrawer'
import IngredientDrawer from './components/common/IngredientDrawer'
import RemoveIngredientModal from './components/common/RemoveIngredientModal'
import SnackBar from './components/common/SnackBar'
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
      selectedCocktail: null,
      selectedIngredient: null,
      searchError: false,
      searchErrorText: "",
      removingItem: null,
      removedItem: null
    }
    this.removeIngredientClick = this.removeIngredientClick.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.selectCocktail = this.selectCocktail.bind(this);
    this.closeCocktailDrawer = this.closeCocktailDrawer.bind(this);
    this.selectIngredient = this.selectIngredient.bind(this);
    this.closeIngredientDrawer = this.closeIngredientDrawer.bind(this);
    this.closeOpenDrawers = this.closeOpenDrawers.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.dismissWarning = this.dismissWarning.bind(this);
  }

  removeIngredientClick(ingredient) {
    this.setState({removingItem: ingredient})
  }

  removeIngredient(ingredient) {
    this.setState(removeIngredient(ingredient, this.state.ingredients), function() {
      this.setState(matchCocktails(this.state.cocktails, this.state.ingredients))
      this.setState({removedItem: ingredient})
    });
  }

  addIngredient(ingredient) {
    this.setState(validateIngredient(this.state.ingredients, ingredient), function() {
      if (!this.state.searchError) {
        this.setState(addIngredient(ingredient, this.state), function() {
          this.setState(matchCocktails(this.state.cocktails, this.state.ingredients), function() {
            this.setState(sortCocktails(this.state.ingredients, this.state.matchedCocktails));
          })
        })
      }
    });
  }

  selectCocktail(cocktail) {
    this.setState({ selectedCocktail: cocktail });
  }

  closeCocktailDrawer() {
    this.setState({ selectedCocktail: null });
  }

  selectIngredient(ingredient) {
    this.setState({ selectedIngredient: ingredient });
  }

  closeIngredientDrawer() {
    this.setState({ selectedIngredient: null});
  }

  closeOpenDrawers() {
    if (this.state.selectedIngredient || this.state.selectedCocktail) {
      this.setState(
        {
          selectedCocktail: null,
          selectedIngredient: null
        }
      );
    }
  }

  closeModal(remove) {
    remove
      ? this.removeIngredient(this.state.removingItem)
      : "";
    this.setState({removingItem: null});
  }

  closeSnackBar(undo) {
    undo
      ? this.addIngredient(this.state.removedItem)
      : ''
    this.setState({removedItem: null});
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
        <div
          className="App flex-container"
          onClick = {this.closeOpenDrawers}
        >
          <div className="flex-item flex-basis-50">
            <BarSupplies
              dismissWarning = {this.dismissWarning}
              searchError = {this.state.searchError}
              searchErrorText = {this.state.searchErrorText}
              ingredients={this.state.ingredients}
              addIngredient={this.addIngredient}
              removeIngredient={this.removeIngredientClick}
              ingredientClick={this.selectIngredient}
            />
          </div>
          <div className="flex-item flex-basis-50">
            <Cocktails
              ingredients={this.state.ingredients}
              matchedCocktails={this.state.matchedCocktails}
              cocktailClick={this.selectCocktail}
              ingredientClick={this.selectIngredient}
            />
          </div>
        </div>
        {this.state.selectedCocktail
          ? (
            <CocktailDrawer
              selectedCocktail = {this.state.selectedCocktail}
              ingredients = {this.state.ingredients}
              closeDrawer = {this.closeCocktailDrawer}
              ingredientClick={this.selectIngredient}
            />
          )
          : ''
        }
        {this.state.selectedIngredient
          ? (
            <IngredientDrawer
              selectedIngredient = {this.state.selectedIngredient}
              closeDrawer = {this.closeIngredientDrawer}
            />
          )
          : ''
        }
        {this.state.removingItem
          ? (
            <RemoveIngredientModal
              open = {true}
              closeModal = {this.closeModal}
              nameRemoving = {this.state.removingItem.name}
            />
          )
          : ''
        }
        {this.state.removedItem
          ? (
            <SnackBar
              open = {true}
              nameRemoved = {this.state.removedItem.name}
              closeSnackBar = {this.closeSnackBar}
            />
          )
          : ''
        }
      </div>
    );
  }
}

export default CocktailBar;
