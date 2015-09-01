// Packages import
import React, {PropTypes} from 'react';
// Components import
import CardProfile from './CardProfile.jsx';
import Input from './ProfileComponents/Input.jsx';
import ActionsButtons from './ProfileComponents/ActionsButtons.jsx';
// Constants import
import {
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  PHONE,
  ENTER_YOUR_FIRSTNAME,
  ENTER_YOUR_LASTNAME,
  ENTER_YOUR_EMAIL,
  ENTER_YOUR_PHONE,
  COPY_PROFILE_PASSWORDAREA,
  ENTER_YOUR_PASSWORD,
  REPEAT_YOUR_PASSWORD,
  PASSWORD,
  RE_ENTER,
  EDIT,
  SAVE,
  CANCEL
} from '../../constants/LabelsConstants';

class CardUserProfile extends React.Component {

  constructor() {
    super();
    this.state = {
      url: '../../../img/avatarDefault.png',
      readOnly: true,
      passwordArea: false,
      btnName: EDIT,
      updateButton: false,
      avatarBtn: false
    };
  }

  componentDidUpdate() {
    if (this.state.passwordArea) {
      componentHandler.upgradeDom();
    }
  }

  render() {
    return (
      <CardProfile
        url={this.state.url}
        onClickAvatar={()=>{}}
        onClickEdit={this.handleEditClick.bind(this)}
        btnName={this.state.btnName}
        avatarBtn={this.state.avatarBtn} >
        <Input
          label={FIRSTNAME}
          placeholder={ENTER_YOUR_FIRSTNAME}
          type='text'
          className={this.props.firstNameClass}
          ref='firstName'
          elmId='FirstName'
          readOnly={this.state.readOnly} />
        <Input
          label={LASTNAME}
          placeholder={ENTER_YOUR_LASTNAME}
          type='text'
          className={this.props.lastNameClass}
          ref='lastName'
          elmId='LastName'
          readOnly={this.state.readOnly} />
        <Input
          label={EMAIL}
          placeholder={ENTER_YOUR_EMAIL}
          type='email'
          className={this.props.emailClass}
          ref='email'
          elmId='Email'
          readOnly={this.state.readOnly} />
        <Input
          label={PHONE}
          placeholder={ENTER_YOUR_PHONE}
          type='phone'
          className={this.props.phoneClass}
          ref='phone'
          elmId='Phone'
          readOnly={this.state.readOnly} />
        {this.passwordArea()}
        {this.updateButton()}
      </CardProfile>
    );
  }

  handleEditClick() {
    if (this.state.btnName === EDIT) {
      this.setState({
      readOnly: false,
      passwordArea: true,
      btnName: CANCEL,
      updateButton: true,
      avatarBtn: true
    });
    } else if (this.state.btnName === CANCEL) {
      this.setState({
        btnName: EDIT,
        readOnly: true,
        passwordArea: false,
        cancelButton: false,
        updateButton: false,
        avatarBtn: false
      });
    }
  }

  passwordArea() {
    if (this.state.passwordArea) {
      return (
        <div>
          <div className="section-lead">
            <p className="lead">
              {COPY_PROFILE_PASSWORDAREA}
            </p>
          </div>
          <Input
            className={this.props.passwordClass}
            ref="password"
            elmId="password"
            label={PASSWORD}
            placeholder={ENTER_YOUR_PASSWORD}
            type="password" />
          <Input
            readOnly={this.state.readonly}
            className={this.props.passwordRepeatClass}
            ref="password1"
            elmId="password1"
            label={RE_ENTER}
            placeholder={REPEAT_YOUR_PASSWORD}
            type="text" />
        </div>
      );
    }
  }

  updateButton() {
    if (this.state.updateButton) {
      return (
        <ActionsButtons name={SAVE} onClick={this.props.onClickSave} />
      );
    }
  }
}

CardUserProfile.propTypes = {
  url: PropTypes.string,
  firstNameClass: PropTypes.string,
  lastNameClass: PropTypes.string,
  emailClass: PropTypes.string,
  phoneClass: PropTypes.string,
  onClickSave: PropTypes.func.isRequired,
  passwordClass: PropTypes.string,
  passwordRepeatClass: PropTypes.string
};

export default CardUserProfile;
