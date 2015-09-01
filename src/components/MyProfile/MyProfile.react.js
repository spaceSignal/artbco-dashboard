// Packages import
import React from 'react';
// Components import
import Card from '../GeneralComponents/Card.react';
import CardUserProfile from '../GeneralComponents/CardUserProfile.jsx';
// Utils import
import ProfileAPIUtils from '../../utils/ProfileAPIUtils.js';
// Stores import
import ProfileStore from '../../stores/ProfileStore.js';

class MyProfile extends React.Component {

  constructor() {
    super();
    ProfileAPIUtils.getUser();
    this.state = {
      firstNameClass: '',
      lastNameClass: '',
      emailClass: '',
      phoneClass: '',
      password: '',
      password1: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      passwordClass: '',
      passwordRepeatClass: ''
    };
  }

  componentWillMount() {
    this.changeListener = this._onChange.bind(this);
    ProfileStore.addChangeListener(this.changeListener);
  }



  _onChange() {
    this.refs.myProfile.refs.firstName.refs.input.getDOMNode().value = ProfileStore.firstName;
    this.refs.myProfile.refs.lastName.refs.input.getDOMNode().value = ProfileStore.lastName;
    this.refs.myProfile.refs.email.refs.input.getDOMNode().value = ProfileStore.email;
    this.refs.myProfile.refs.phone.refs.input.getDOMNode().value = ProfileStore.phone;
  }

  render () {
    return (
      <Card title='My Profile' icon='person'>
        <CardUserProfile
          onClickSave={this._handlerSaveClick.bind(this)}
          ref='myProfile'
          firstNameClass={this.state.firstNameClass}
          lastNameClass={this.state.lastNameClass}
          emailClass={this.state.emailClass}
          phoneClass={this.state.phoneClass}
          passwordClass={this.state.passwordClass}
          passwordRepeatClass={this.state.passwordRepeatClass} >
        </CardUserProfile>
      </Card>
    );
  }

  _handlerSaveClick(e) {
    e.preventDefault();

    let firstName = this.refs.myProfile.refs.firstName.refs.input.getDOMNode().value;
    let lastName = this.refs.myProfile.refs.lastName.refs.input.getDOMNode().value;
    let email = this.refs.myProfile.refs.email.refs.input.getDOMNode().value;
    let phone = this.refs.myProfile.refs.phone.refs.input.getDOMNode().value;
    let password = this.refs.myProfile.refs.password.refs.input.getDOMNode().value;
    let password1 = this.refs.myProfile.refs.password1.refs.input.getDOMNode().value;

    if (firstName === '') {
        this.setState({
          firstNameClass: 'has-error'
        });
      } else if (lastName === '') {
        this.setState({
          firstNameClass: '',
          lastNameClass: 'has-error'
        });
      } else if (email === '') {
        this.setState({
          lastNameClass: '',
          emailClass: 'has-error'
        });
      } else if (phone === '') {
        this.setState({
          emailClass: '',
          phoneClass: 'has-error'
        });
      } else if (password !== password1) {
        this.setState({
          phoneClass: '',
          passwordClass: 'has-error',
          passwordRepeatClass: 'has-error'
        });
      } else {
        this.setState({
          passwordClass: '',
          passwordRepeatClass: ''
       });
       ProfileAPIUtils.updateUser(firstName, lastName, email, phone);
       }
    }

  componentWillUnmount() {
    ProfileStore.removeChangeListener(this.changeListener);
  }
}

export default MyProfile;
