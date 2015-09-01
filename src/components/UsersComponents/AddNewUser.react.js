// Packages import
import React from 'react';
// Components import
import CardUserProfile from '../GeneralComponents/CardUserProfile.jsx';
import Card from '../GeneralComponents/Card.react';
// Actions import
import ProfileActions from '../../actions/ProfileActions';
// Constants import
import {
  ADD_NEW_USER
} from '../../constants/LabelsConstants';

class AddNewUser extends React.Component {

  render() {
    return (
      <Card icon='person_add' title={ADD_NEW_USER} >
        <CardUserProfile
        ref='addnewuser'
          onClickSave={this._handleOnClickSave.bind(this)} >
        </CardUserProfile>
      </Card>
    );
  }

  _handleOnClickSave() {
    let firstName = this.refs.addnewuser.refs.firstName.refs.input.getDOMNode().value;
    let lastName = this.refs.addnewuser.refs.lastName.refs.input.getDOMNode().value;
    let email = this.refs.addnewuser.refs.email.refs.input.getDOMNode().value;
    let password = this.refs.addnewuser.refs.password.refs.input.getDOMNode().value;
    let password1 = this.refs.addnewuser.refs.password1.refs.input.getDOMNode().value;

    if(password === password1) {
      ProfileActions.addNewUser(firstName, lastName, email, password);
    }
  }
}

export default AddNewUser;