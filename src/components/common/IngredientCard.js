import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';

class IngredientCard extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.handleIngredientClick = this.handleIngredientClick.bind(this);
  }

  handleIngredientClick() {
    this.props.ingredientClick(this.props.cardData);
  }

  remove() {
    this.props.removeCard(this.props.cardData)
  }

  render() {
    const style = {
      card: {
        margin: '10px 0',
        color: 'white',
        background: 'rgb(45,48,60)',
        background: '-moz-linear-gradient(top, rgba(45,48,60,1) 0%, rgba(53,53,56,1) 100%)' ,
        background: '-webkit-linear-gradient(top, rgba(45,48,60,1) 0%,rgba(53,53,56,1) 100%)' ,
        background: 'linear-gradient(to bottom, rgba(45,48,60,1) 0%,rgba(53,53,56,1) 100%)' ,
      },
      button: {
        marginTop: '15px'
      },
      img: {
        height: '150px',
        width: '150px',
        backgroundSize: 'contain'
      },
      removeText: {
        padding: '10px 0'
      }
    };

    return (
      <div>
        <Card className="flex-container justify-content-space-evenly align-items-center center-text" style={style.card}>
          <div className="flex-container flex-column flex-item flex-basis-66">
            <CardContent>
              <div className="flex-item clickable float-right removeIngredientButton" onClick={this.remove}>
                <i className="fa fa-close flex-item"></i>
              </div>
              <p
                className="flex-item text large-text white-text hover-underline"
                onClick={this.handleIngredientClick}
              >
                {this.props.cardData.name}
              </p>
              <button
                type="button"
                className="flex-item button default-button"
                onClick={this.handleIngredientClick}
                style={style.button}
              >
                VIEW INGREDIENT
              </button>
            </CardContent>
          </div>

        </Card>
      </div>
    );
  }
}

IngredientCard.propTypes = {
  removeCard: PropTypes.func.isRequired,
  cardData: PropTypes.shape({
    ingredientId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    imgUrl: PropTypes.string
  })
}

export default IngredientCard;
