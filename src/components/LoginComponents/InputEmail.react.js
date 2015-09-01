// Packages import
import React, {PropTypes} from 'react';
// Constants import
import {
  ENTER_YOUR_EMAIL
} from '../../constants/LabelsConstants';

class InputEmail extends React.Component {

  constructor () {
    super();
    this.state = {
      inputTextClassName: 'mdl-textfield mdl-js-textfield'
    };
  }
  componentDidMount() {
    this.refs.email.getDOMNode().focus();
  }

  render() {

    return (
      <div className={`${this.state.inputTextClassName} ${this.props.className}`}>
        <label className="mdl-textfield__label" htmlFor="Input-Email-input">{ENTER_YOUR_EMAIL}</label>
        <input
          id="Input-Email-input"
          type="email"
          className="mdl-textfield__input LoginComponent-email"
          ref="email"
           />
        </div>
    );
  }
}

InputEmail.propTypes = {
  className: PropTypes.string.isRequired
};

export default InputEmail;
