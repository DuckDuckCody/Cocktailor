import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button'

const FloatingAddButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.handleClick();
  }

  const style = {
    addButtonContainerStyle: {
      bottom: !props.inPhoneLayout ? (props.snackBarIsOpen ? '75px' : '25px') : '12.5%',
      position: 'fixed',
      left: '25px',
      transition: 'bottom 0.25s ease'
    },
    addButtonStyle: {
      backgroundColor: '#00d1b2'
    }
  }

  return (
    <div style={style.addButtonContainerStyle}>
      <Button
        onClick={handleClick}
        variant="fab"
        color="primary"
        aria-label="add"
        className="addButton"
        style={style.addButtonStyle}
      >
        <i className="fa fa-plus"></i>
      </Button>
    </div>
  );
}

FloatingAddButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  snackBarIsOpen: PropTypes.bool,
  inPhoneLayout: PropTypes.bool.isRequired
}

export default FloatingAddButton;
