import React, {Component} from 'react';
import BarSupplies from './components/BarSupplies'
import Cocktails from './components/Cocktails'
import ingredients from './assets/data/ingredients.js'
import cocktails from './assets/data/cocktails.js'
import Modal from 'react-modal';
import {validateIngredient} from './helpers/validateIngredients.js'
import {matchCocktails} from './helpers/matchCocktails.js'
import {removeIngredient, addIngredient} from './helpers/updateIngredients.js'

class CocktailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ingredients,
      selectedIngredients: [],
      cocktails: cocktails,
      matchedCocktails: [],
      selectedCocktail: {},
      modalIsOpen: false
    }
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.cocktailClick = this.cocktailClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  cocktailClick(cocktail) {
    this.setState(
      {
        selectedCocktail:cocktail,
        modalIsOpen: true
      }
    );
  }

  closeModal() {
    this.setState(
      {
        selectedCocktail: {},
        modalIsOpen: false
      }
    )
  }

  render() {
    return (
      <div className="App flex-container">
        <div className="flex-item flex-basis-50">
          <BarSupplies ingredients={this.state.ingredients} selectedIngredients={this.state.selectedIngredients} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
        </div>
        <div className="flex-item flex-basis-50">
          <Cocktails
            selectedIngredients={this.state.selectedIngredients}
            ingredients={this.state.ingredients}
            matchedCocktails={this.state.matchedCocktails}
            cocktailClick={this.cocktailClick}
          />
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Cocktail"
        >
          <div className="flex-container center-text">
            <div className="flex-item flex-basis-50">
              <h2> {this.state.selectedCocktail.name} </h2>
            </div>

            <div className="flex-item flex-basis-50">
              <i onClick={this.closeModal} className="fa fa-window-close close-button"></i>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}

export default CocktailBar;
