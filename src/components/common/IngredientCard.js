import React, { Component } from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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
    let RemoveButton = null;
    if (this.state.removing) {
      RemoveButton = (
        <div className="flex-container flex-wrap">
          <Typography className="flex-item flex-basis-100">
            Are you sure you want to remove?
          </Typography>
          <Button
            className="flex-item flex-basis-50"
            onClick={(e) => this.confirmRemove(false)}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            className="flex-item flex-basis-50"
            onClick={(e) => this.confirmRemove(true)}
          >
            Remove
          </Button>
        </div>
        )
    } else {
      RemoveButton = (
        <Button className="flex-item" onClick={this.remove}>
          Remove
        </Button>
      )
    }

    var style = {
      card: {
        margin: '10px 0'
      },
      img: {
        height: '151px',
        width: '151px'
      },
      deleteIcon: {
        height: '38px',
        width: '38px'
      }
    };

    return (
      <div>
        <Card className="flex-container justify-content-space-evenly align-items-center center-text" style={style.card}>
          <div className="flex-container flex-column flex-item flex-basis-66">
            <CardContent>
              <Typography variant="headline" className="flex-item">
                {this.props.cardData.name}
              </Typography>
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

export default IngredientCard;
