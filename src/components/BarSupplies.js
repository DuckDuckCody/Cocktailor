import React, { Component } from 'react';
import CardList from './common/CardList';
import Search from './common/Search'
import Toggle from './common/Toggle'
import Typography from 'material-ui/Typography';

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
      container: {
        display: 'flex',
      },
      header_container: {
        height: '60px',
        display: 'flex',
        'flex-flow': 'row nowrap',
        'align-items': 'center',
        'margin-bottom': '10px'
      },
      title: {
        flex: '75%'
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
        <div style={style.conatiner}>
          <div style={style.header_container}>
            <Typography style={style.title} variant='title'>
              <b> Bar Supplies </b>
            </Typography>

            <div style={style.button}>
              <Toggle
                 onToggle = {this.toggleSearch}
                 toggled = {this.state.toggledSearch}
                 inactiveText = "Add Ingredients"
                 activeText = "Close"
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

export default BarSupplies;
