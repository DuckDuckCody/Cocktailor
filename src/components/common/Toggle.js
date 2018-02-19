import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.onToggle()
  }

  render() {
    return (
      <div className={this.props.className}>
        <button
          type="button"
          onClick={this.toggle}
          className="button-toggle"
        >
          {this.props.toggled
            ? this.props.activeText
            : this.props.inactiveText
          }
        </button>
      </div>
    );
  }
}

export default Toggle;
