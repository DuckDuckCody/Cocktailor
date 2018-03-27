import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const Toggle = (props) => {
  function toggle() {
    props.onToggle()
  }

  var style = {
    'button_color': {
      color: props.toggled ? '#FD295D' : '#10C0FD',
      fontFamily: "'Lato', sans-serif"
    }
  }

  return (
    <div>
      <Button onClick={toggle} style={style.button_color}>
        {props.toggled
          ? props.activeText
          : props.inactiveText
        }
      </Button>
    </div>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired,
  activeText: PropTypes.string.isRequired,
  inactiveText: PropTypes.string.isRequired
}

export default Toggle;
