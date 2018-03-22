import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

class IngredientCard extends Component {
  constructor(props) {
    super(props);
    this.state = { removing: false };
    this.remove = this.remove.bind(this);
    this.confirmRemove = this.confirmRemove.bind(this);
  }

  remove() {
    this.setState({removing: true});
  }

  confirmRemove(remove) {
    remove
      ? this.props.removeCard(this.props.cardData)
      : this.setState({removing: false})
  }

  render() {
    const style = {
      card: {
        margin: '10px 0',
        backgroundColor: 'rgb(47, 47, 49)'
      },
      button: {
        marginTop: '15px'
      },
      img: {
        height: '151px',
        width: '151px'
      },
      deleteIcon: {
        height: '38px',
        width: '38px'
      },
      removeText: {
        padding: '10px 0'
      }
    };

    let RemoveButton = null;
    if (this.state.removing) {
      RemoveButton = (
        <div className="flex-container flex-wrap">
          <p className="text normal-text flex-item flex-basis-100" style={style.removeText}>
            Are you sure you want to remove?
          </p>
          <button
            type="button"
            className="flex-item flex-basis-50 button default-button"
            onClick={(e) => this.confirmRemove(false)}
          >
            CANCEL
          </button>
          <button
            type="button"
            className="flex-item flex-basis-50 button delete-button"
            onClick={(e) => this.confirmRemove(true)}
          >
            REMOVE
          </button>
        </div>
        )
    } else {
      RemoveButton = (
        <button
          type="button"
          className="flex-item grey-text button default-button"
          onClick={this.remove}
          style={style.button}
        >
          REMOVE
        </button>
      )
    }

    return (
      <div>
        <Card className="flex-container justify-content-space-evenly align-items-center center-text" style={style.card}>
          <div className="flex-container flex-column flex-item flex-basis-66">
            <CardContent>
              <p className="flex-item text large-text white-text">
                {this.props.cardData.name}
              </p>
              { RemoveButton }
            </CardContent>
          </div>
          <CardMedia style={style.img} className="flex-item flex-basis-33"
            image={this.props.cardData.imgUrl}
            title={this.props.cardData.name}
            alt={this.props.cardData.name}
          />
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
