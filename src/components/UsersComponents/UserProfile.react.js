// Packages import
import React from 'react';
// Components import
import Card from '../GeneralComponents/Card.react';
import CardUserProfile from '../GeneralComponents/CardUserProfile.jsx';
// Constants import
import {
  USER_PROFILE
} from '../../constants/LabelsConstants';

class UserProfile extends React.Component {

  render () {
    return (
      <Card icon='person' title={USER_PROFILE} >
      <CardUserProfile
      onClickSave={()=>{}}
      ref='userProfile' >
      </CardUserProfile>
      </Card>
    );
  }
}

export default UserProfile;