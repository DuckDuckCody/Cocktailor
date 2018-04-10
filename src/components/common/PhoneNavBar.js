import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';

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
        height: "5vh"
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
          <BottomNavigationAction label="Bar Supplies" icon={<i className="fa fa-cutlery"></i>} />
          <BottomNavigationAction
            label="Cocktail"
            icon={<i className="fa fa-glass"></i>}
          />
        </BottomNavigation>
    )
  }
}

PhoneNavBar.propTypes = {
  navClick: PropTypes.func.isRequired
}

export default PhoneNavBar;
