import React from 'react';

const Toggle = (props) => {
  function toggle() {
    props.onToggle()
  }

  return (
    <div className={props.className}>
      <button
        type="button"
        onClick={toggle}
        className="button-toggle"
      >
        {props.toggled
          ? props.activeText
          : props.inactiveText
        }
      </button>
    </div>
  );

}

export default Toggle;
