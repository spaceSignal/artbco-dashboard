// Packages import
import React from 'react';
// Constants import
import {
  ENTER_YOUR_PASSWORD
} from '../../constants/LabelsConstants';

class InputPassword extends React.Component {

  constructor () {
    super();
    this.state = {
      inputTextClassName: 'mdl-textfield mdl-js-textfield'
    };
  }

  render() {

   return (
        <div className={`${this.state.inputTextClassName} ${this.props.className}`}>
          <label className="mdl-textfield__label" htmlFor="Input-Password-input">{ENTER_YOUR_PASSWORD}</label>
          <input
            type="password"
            className="mdl-textfield__input LoginComponent-password"
            id="Input-Password-input"
            ref="password" />
        </div>
    );
  }
}

export default InputPassword;
