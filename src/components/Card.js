import React, { Component } from 'react';
import '../css/App.css';
import '../css/Flex.css';

class Card extends Component {
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
      ? this.props.removeIngredient(this.props.ingredient.ingredientId)
      : this.setState({removing: false})
  }

  render() {
    let remove = null;
    if (this.state.removing) {
      remove = (
        <div className="flex-container flex-wrap">
          <p className="flex-item flex-basis-100">
            Are you sure you want to remove?
          </p>
          <button
            className="flex-item flex-basis-50"
            type="button"
            onClick={(e) => this.confirmRemove(false)}
          >
            Cancel
          </button>
          <button
            className="flex-item flex-basis-50"
            type="button"
            onClick={(e) => this.confirmRemove(true)}
          >
            Remove
          </button>
        </div>
        )
    } else {
      remove = (
        <button
          type="button"
          onClick={this.remove}>
          Remove
        </button>
      )
    }

    return (
      <div className="card flex-container">
        <div className="flex-item flex-basis-50 card-text">
          <h3> {this.props.ingredient.label} </h3>
          <p><i> {this.props.ingredient.desc} </i></p>
          {remove}
        </div>
        <div className="flex-item flex-basis-50">
          <img className=" picture-container-small"
            src={this.props.ingredient.imgUrl}
            alt={this.props.ingredient.name}
          />
        </div>
      </div>

    );
  }
}

export default Card;
