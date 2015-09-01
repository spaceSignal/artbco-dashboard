// Packages import
import React from 'react';

class SubmitButton extends React.Component {

  render() {
    return (
      <div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect LoginComponent-submit-button"
          onClick={this.props.click}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

SubmitButton.propTypes = {
  click: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};

export default SubmitButton;
