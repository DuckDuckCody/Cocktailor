import React from 'react';

const IconBanner = (props) => {
  const style = {
    font: {
      color: "white",
    }
  }

  return (
    <div className="icon-banner flex-container flex-column justify-content-space-evenly">
      <span className="flex-item" style={style.font}> Cocktailor </span>
    </div>
  );
}

export default IconBanner;
