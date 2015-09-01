// Packages import
import React from '../../../node_modules/react/addons';
import {Link} from 'react-router';
// Components import
import SubmitButton from './SubmitButton.react';
import InputEmail from './InputEmail.react';
import InputPassword from './InputPassword.react';
import Logo from './Logo.react';
// Style import
import '../../../styles/LoginComponents/Login.scss';
// Stores import
import LoginStore from '../../stores/LoginStore';
// Utils Import
import LoginAPIUtils from '../../utils/LoginAPIUtils.js';
// Constants import
import {
    SIGN_IN,
    RESET_YOUR_PASSWORD,
    BAD_EMAIL_OR_PWD
} from '../../constants/LabelsConstants.js';

class Login extends React.Component {

  constructor(){
    super();
    this.state = {
      emailClass: '',
      passwordClass: '',
      loginError: false
    };
  };

  componentDidMount(){
    this.errorListener = this._onError.bind(this);
    LoginStore.addChangeListener(this.errorListener);
  };

  _onError(){
    this.setState({
      loginError: true
    });
  }

  login(e) {
    e.preventDefault();

    let email = this.refs.emailLogin.refs.email.getDOMNode().value;
    let password = this.refs.passwordLogin.refs.password.getDOMNode().value;

    if(email === '') {
      this.setState({
        emailClass: 'is-invalid is-dirty is-focused',
        passwordClass: ''
      });
    } else if (password === '' || password.length < 6) {
      this.setState({
        passwordClass: 'is-invalid is-dirty is-focused',
        emailClass: ''
      });
    } else {
      LoginAPIUtils.login(email, password);
    }
  }

  render() {
    return (
      <div className="LoginComponent">
        <div className="Login">
          <Logo />
          <InputEmail className={this.state.emailClass} ref="emailLogin" />
          <InputPassword className={this.state.passwordClass} ref="passwordLogin" />
          {this.handlerError()}
          <SubmitButton click={this.login.bind(this)} text={SIGN_IN} />
          <div
            className="Login-recovery-password" >
            <Link to="passwordReset">{RESET_YOUR_PASSWORD}</Link>
          </div>
        </div>
      </div>
    );
  };

  handlerError(){
    if (this.state.loginError) {
      return (
        <div className="Login-error">
            {BAD_EMAIL_OR_PWD}
        </div>
      );
    }
  }

  componentWillUnmount(){
    LoginStore.removeChangeListener(this.errorListener);
  }
}

export default Login;
