import React from 'react';

const Drawer = (props) => {
  function handleClose(e) {
    e.preventDefault();
    props.closeDrawer();
  }

  /*
    todo: find ingredient names and place amount before name, then render it.
  */

  return (
    <div className="flex-container drawer animated slideInRight center-text flex-wrap">
        <p className="flex-item flex-basis-50"> {props.title} </p>
        <a className="flex-item flex-basis-50" type="button" onClick={handleClose}>
          <i className="close-button fa fa-close"></i>
        </a>
        <p className="flex-item flex-basis-100">
          {props.method}
        </p>
    </div>
  );
}

export default Drawer;
