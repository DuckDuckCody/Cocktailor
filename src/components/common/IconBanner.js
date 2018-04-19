import React from 'react';

const IconBanner = (props) => {
  const style = {
    font: {
      color: "white",
    }
  }

  return (
    <div className="icon-banner flex-container flex-column justify-content-space-evenly">
      <span className="flex-item" style={style.font}> Suggest Me </span>
      <span className="flex-item" style={style.font}> Cocktails </span>
    </div>
  );
}

export default IconBanner;
