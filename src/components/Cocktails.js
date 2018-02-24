import React, { Component } from 'react';
import CardList from './common/CardList';

class Cocktails extends Component {
  render() {
    return (
      <div className="card-conatiner">
        <div className="flex-container jumbotron">
          {/* Title */}
          <span className="flex-item flex-basis-75">
            Cocktails
          </span>
          {/* end of Title */}
        </div>
        {/* CardList */}
        <CardList
          cardData = {this.props.matchedCocktails}
          keyName = "cocktailId"
          emptyDataTitle = "No cocktails have been matched yet."
          emptyDataDesc = "Add bar supplies to get matched cocktails"
          removable = {this.props.removable}
        />
        {/* end of CardList */}
      </div>
    );
  }
}

export default Cocktails;
