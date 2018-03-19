import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, function() {
        this.props.handleChange(this.state.selectedOption);
        this.setState({selectedOption: ''});
      }
    );
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption[this.props.valueKey];

    return (
      <div>
        <div className="flex-container">
          <Select
            placeholder={this.props.placeholder}
            name="form-field-name"
            value={value}
            onChange={this.handleChange}
            options={this.props.searchValues}
            className="flex-item flex-basis-100"
            labelKey={this.props.labelKey}
            valueKey={this.props.valueKey}
          />
        </div>
        {this.props.error
           ? (<div className="flex-container">
               <span className="flex-item flex-basis-75 error-text">
                 {this.props.errorText}
               </span>
                 <button
                   type='button'
                   className="flex-item flex-basis-25 button-close"
                   onClick={this.props.dismissWarning}
                 >
                   Dismiss &nbsp;
                   <i className="fa fa-close fa-10x"></i>
                 </button>
             </div>)
           : ""
         }
      </div>
    );
  }
}

export default Search;
