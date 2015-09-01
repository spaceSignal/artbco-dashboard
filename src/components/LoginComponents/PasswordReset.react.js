// Packages import
import React from 'react';
// Components import
import SubmitButton from './SubmitButton.react';
import InputEmail from './InputEmail.react';
import Logo from './Logo.react';
// Styling import
import '../../../styles/LoginComponents/Login.scss';
// Utils import
import ResetPasswordAPIUtils from '../../utils/ResetPasswordAPIUtils';
// Constants import
import {
  RESET
} from '../../constants/LabelsConstants';

class PasswordReset extends React.Component {

  constructor(){
    super();
    this.state = {
      emailClass: ''
    };
  }

  handlerResetButtonClick(e){
    e.preventDefault();
    let email = this.refs.emailReset.refs.email.getDOMNode().value;
    if (email === '') {
      this.setState({
        emailClass: 'has-error'
      });
    } else {
      ResetPasswordAPIUtils.reset(email);
    }

  }

  render() {
    return (
      <div className="PasswordResetComponent">
        <div className="PasswordReset">
          <Logo />
          <InputEmail className={this.state.emailClass} ref="emailReset"/>
          <SubmitButton click={this.handlerResetButtonClick.bind(this)} text={RESET} />
        </div>
      </div>
    );
  }
}

export default PasswordReset;
