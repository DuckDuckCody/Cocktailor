import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';

const styles = {
  root: {
    color: 'white'
  }
}

class PhoneNavBar extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({value})
    this.props.navClick(value === 0 ? "barSupplies" : "Cocktails");
  }

  render() {
    const style = {
      navBar: {
        width: "100%",
        height: "10vh",
        position: "fixed",
        bottom: 0,
        backgroundColor: 'rgb(45, 48, 60)'
      }
    };

    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        style = {style.navBar}
      >
        <BottomNavigationAction
          className="bottomNavButtons"
          label="Bar Supplies"
          icon={<i className="fa fa-cutlery"></i>}
          style={{color: value === 0 ? '#10C0FD' : 'white'}}
        />
        <BottomNavigationAction
          className="bottomNavButtons"
          label="Cocktail"
          icon={<i className="fa fa-glass"></i>}
          style={{color: value === 1 ? '#10C0FD' : 'white'}}
        />
      </BottomNavigation>
    )
  }
}

PhoneNavBar.propTypes = {
  navClick: PropTypes.func.isRequired
}

export default withStyles(styles)(PhoneNavBar);
