import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const style = {
      container: {
        padding: '15px 0'
      }
    }

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
           ? (<div className="flex-container" style={style.container}>
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

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  searchValues: PropTypes.array.isRequired,
  labelKey: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  dismissWarning: PropTypes.func
}

export default Search;
