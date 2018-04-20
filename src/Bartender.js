import React, {Component} from 'react';
import Hammer from 'hammerjs';
import BarSupplies from './components/BarSupplies'
import Cocktails from './components/Cocktails'
import CocktailDrawer from './components/common/CocktailDrawer'
import IngredientDrawer from './components/common/IngredientDrawer'
import RemoveIngredientModal from './components/common/RemoveIngredientModal'
import AddIngredientModal from './components/common/AddIngredientModal'
import PhoneNavBar from './components/common/PhoneNavBar'
import SnackBar from './components/common/SnackBar'
import FloatingAddButton from './components/common/FloatingAddButton'
import IconBanner from './components/common/IconBanner'
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
      inPhoneLayout: false,
      ingredients: ingredients,
      cocktails: cocktails,
      matchedCocktails: [],
      selectedCocktail: null,
      selectedIngredient: null,
      searchError: false,
      searchErrorText: "",
      removingItem: null,
      removedItem: null,
      addedItem: null,
      responsiveShowBarSupplies: true,
      responsiveShowCocktail: false,
      addingItems: false
    }
    this.removeIngredientClick = this.removeIngredientClick.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.selectCocktail = this.selectCocktail.bind(this);
    this.closeCocktailDrawer = this.closeCocktailDrawer.bind(this);
    this.selectIngredient = this.selectIngredient.bind(this);
    this.closeIngredientDrawer = this.closeIngredientDrawer.bind(this);
    this.closeOpenDrawers = this.closeOpenDrawers.bind(this);
    this.closeRemoveModal = this.closeRemoveModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.closeRemovedSnackBar = this.closeRemovedSnackBar.bind(this);
    this.closeAddedSnackBar = this.closeAddedSnackBar.bind(this);
    this.dismissWarning = this.dismissWarning.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.navClick = this.navClick.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.showBarSupplies = this.showBarSupplies.bind(this);
    this.showCocktails = this.showCocktails.bind(this);
  }

  componentDidMount() {
    //check if on phone or desktop
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    //swipe support
    var hammertime = new Hammer.Manager(document.getElementById('app'), {
       touchAction: 'auto',
       inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
       recognizers: [
         [Hammer.Swipe, {
           direction: Hammer.DIRECTION_HORIZONTAL
         }]
       ]
     });
    hammertime.on('swiperight', this.showBarSupplies);
    hammertime.on('swipeleft', this.showCocktails);
  }

  showBarSupplies() {
    this.setState({
      responsiveShowBarSupplies: true,
      responsiveShowCocktail: false
    })
  }

  showCocktails() {
    this.setState({
      responsiveShowBarSupplies: false,
      responsiveShowCocktail: true
    })
  }

  updateWindowDimensions() {
    this.setState({ inPhoneLayout: window.innerWidth < 600 });
  }

  removeIngredientClick(ingredient) {
    this.setState({removingItem: ingredient})
  }

  removeIngredient(ingredient) {
    this.setState(removeIngredient(ingredient, this.state.ingredients), function() {
      this.setState({removedItem: ingredient})
      this.setState(matchCocktails(this.state.cocktails, this.state.ingredients), function() {
        this.setState(sortCocktails(this.state.ingredients, this.state.matchedCocktails));
      })
    });
  }

  addIngredient(ingredient) {
    this.setState(validateIngredient(this.state.ingredients, ingredient), function() {
      if (!this.state.searchError) {
        this.setState(addIngredient(ingredient, this.state), function() {
          this.setState({addedItem: ingredient})
          this.setState(matchCocktails(this.state.cocktails, this.state.ingredients), function() {
            this.setState(sortCocktails(this.state.ingredients, this.state.matchedCocktails));
          })
        })
      }
    });
  }

  handleAddButtonClick() {
    this.setState({addingItems: true})
  }

  searchChange(ingredient) {
    this.addIngredient(ingredient);
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

  closeRemoveModal(remove) {
    remove
      ? this.removeIngredient(this.state.removingItem)
      : "";
    this.setState({removingItem: null});
  }

  closeAddModal() {
    this.setState({addingItems: false})
  }

  closeRemovedSnackBar(undo) {
    undo
      ? this.addIngredient(this.state.removedItem)
      : ''
    this.setState({removedItem: null});
  }

  closeAddedSnackBar(undo) {
    undo
      ? this.removeIngredient(this.state.addedItem)
      : ''
    this.setState({addedItem: null});
  }

  dismissWarning() {
    this.setState({
      searchError: false,
      searchErrorText: ''
    })
  }

  navClick(navValue) {
    navValue === "barSupplies"
      ? this.showBarSupplies()
      : this.showCocktails()
  }

  render() {
    let barSuppliesVisibility = "flex-item"
    let cocktailsVisibility = "flex-item"
    if (this.state.responsiveShowBarSupplies && this.state.inPhoneLayout) {
      barSuppliesVisibility = "flex-item"
      cocktailsVisibility = "hidden"
    } else if (this.state.responsiveShowCocktail && this.state.inPhoneLayout) {
      barSuppliesVisibility = "hidden"
      cocktailsVisibility = "flex-item"
    }

    return (
      <div>
        <div>
          <IconBanner />
        </div>
        <div
          className="App flex-container flex-no-wrap"
          id = "app"
          onClick = {this.closeOpenDrawers}
        >
          <div
            className={"animated fadeIn bar-supplies " + barSuppliesVisibility}
          >
            <BarSupplies
              dismissWarning = {this.dismissWarning}
              searchError = {this.state.searchError}
              searchErrorText = {this.state.searchErrorText}
              ingredients={this.state.ingredients}
              addIngredient={this.addIngredient}
              removeIngredient={this.removeIngredientClick}
              ingredientClick={this.selectIngredient}
              inPhoneLayout={this.state.inPhoneLayout}
            />
          </div>
          <div
            className={"animated fadeIn cocktails " + cocktailsVisibility}
          >
            <Cocktails
              ingredients={this.state.ingredients}
              matchedCocktails={this.state.matchedCocktails}
              cocktailClick={this.selectCocktail}
              ingredientClick={this.selectIngredient}
              inPhoneLayout={this.state.inPhoneLayout}
            />
          </div>
          {
            this.state.inPhoneLayout
              ? (
                <PhoneNavBar
                  navClick = {this.navClick}
                  responsiveShowBarSupplies = {this.state.responsiveShowBarSupplies}
                />
              )
              : ""
          }
        <FloatingAddButton
          inPhoneLayout = {this.state.inPhoneLayout}
          snackBarIsOpen = {this.state.addedItem || this.state.removedItem}
          handleClick = {this.handleAddButtonClick}
        />
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
              ingredients = {this.state.ingredients}
              addIngredient = {this.addIngredient}
            />
          )
          : ''
        }
        {this.state.removingItem
          ? (
            <RemoveIngredientModal
              open = {true}
              closeModal = {this.closeRemoveModal}
              nameRemoving = {this.state.removingItem.name}
            />
          )
          : ''
        }
        {this.state.addingItems
          ? (
            <AddIngredientModal
              open={true}
              closeModal = {this.closeAddModal}
              ingredients = {this.state.ingredients}
              searchError = {this.state.searchError}
              errorText = {this.state.searchErrorText}
              dismissWarning = {this.dismissWarning}
              searchChange = {this.searchChange}
            />
          )
          : ''
        }
        {this.state.removedItem
          ? (
            <SnackBar
              open = {true}
              message = "has been removed"
              nameRemoved = {this.state.removedItem.name}
              closeSnackBar = {this.closeRemovedSnackBar}
              inPhoneLayout = {this.state.inPhoneLayout}
            />
          )
          : ''
        }
        {this.state.addedItem
          ? (
            <SnackBar
              open = {true}
              message = "has been added"
              nameRemoved = {this.state.addedItem.name}
              closeSnackBar = {this.closeAddedSnackBar}
              inPhoneLayout = {this.state.inPhoneLayout}
            />
          )
          : ''
        }
      </div>
    );
  }
}

export default CocktailBar;
