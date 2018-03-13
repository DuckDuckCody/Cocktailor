import React, { Component } from 'react';

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
        <div className="flex-item flex-basis-50 center-text">
          <h3> {this.props.cardData.name} </h3>
          <p><i> {this.props.cardData.desc} </i></p>
          {remove}
        </div>
        <div className="flex-item flex-basis-50">
          <img className=" picture-container-small"
            src={this.props.cardData.imgUrl}
            alt={this.props.cardData.name}
          />
        </div>
      </div>

    );
  }
}

export default IngredientCard;
