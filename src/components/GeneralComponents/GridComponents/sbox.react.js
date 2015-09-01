// Packages import
import React, {PropTypes} from 'react';
// Constants
import {
  SEARCH
} from '../../../constants/LabelsConstants';

class SBox extends React.Component {

  render() {
    return (
      <div id="SBox" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-demo sbox-wrapper">
        <input
        className="mdl-textfield__input"
        type="text"
        id="search"
        ref="sbox" />
        <label
        className="mdl-textfield__label"
        htmlFor="search" >
          {SEARCH}
        </label>
        <button
        className="mdl-button mdl-js-button mdl-button--icon"
        id="search"
        onClick={this.props.searchBtn} >
          <i className="material-icons">search</i>
        </button>
      </div>
    );
  }
}

SBox.propTypes = {
  searchBtn: PropTypes.func.isRequired
};

export default SBox;