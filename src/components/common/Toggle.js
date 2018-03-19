import React from 'react';
import Button from 'material-ui/Button';

const Toggle = (props) => {
  function toggle() {
    props.onToggle()
  }

  var style = {
    'button_color': {
      color: 'grey'
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

export default Toggle;
