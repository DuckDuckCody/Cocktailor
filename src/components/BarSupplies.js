import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardList from './common/CardList';
import Search from './common/Search'
import Toggle from './common/Toggle'

class BarSupplies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledSearch: false
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.searchChange = this.searchChange.bind(this);
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

  render() {
    var style = {
      pad: {
        margin: '0 10px'
      },
      divider: {

      },
      header_container: {
        height: '75px',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginBottom: '10px',
        borderBottom: '2px #10C0FD solid'
      },
      title: {
        flex: '75%',
        color: 'white'
      },
      button: {
        flex: '25%'
      },
      search: {
        flex: '100%'
      }
    }

    return (
      <div style={style.pad}>
        <div style={style.divider}>
          <div style={style.header_container}>
            <p className = "title" style={style.title}>
              Bar Supplies
            </p>

            <div style={style.button}>
              <Toggle
                 onToggle = {this.toggleSearch}
                 toggled = {this.state.toggledSearch}
                 inactiveText = "Add Ingredients"
                 activeText = "Close Ingredient Search"
              />
            </div>
          </div>

          <div style={style.item}>
            { this.state.toggledSearch
              ? (<Search
                  searchValues = {this.props.ingredients}
                  handleChange = {this.searchChange}
                  error = {this.props.searchError}
                  errorText = {this.props.searchErrorText}
                  dismissWarning = {this.props.dismissWarning}
                  labelKey = "name"
                  valueKey = "ingredientId"
                  placeholder = "Ingredient search"
                />
              ) : ''
            }
          </div>
        </div>

        <CardList
          cardType = 'ingredient'
          cardData = {this.props.ingredients}
          removeCard = {this.removeIngredient}
          keyName = "ingredientId"
          emptyDataTitle = "No ingredients have been added yet"
          emptyDataDesc = " Click add ingredient to add ingredients to your bar supplies"
        />
      </div>
    );
  }
}

BarSupplies.propTypes = {
  removeIngredient: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.array,
  searchErrorText: PropTypes.string,
  searchError: PropTypes.bool,
  dismissWarning: PropTypes.func
}

export default BarSupplies;
