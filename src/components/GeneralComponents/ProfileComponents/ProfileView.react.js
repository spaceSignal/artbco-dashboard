this// Packages import
import React from 'react';
// Components import
import authenticatedComponent from '../../AuthenticatedComponent';
import ProfileBody from './ProfileBody.react';
import Error from '../AlertsComponents/onError.react';
import Success from '../AlertsComponents/inSuccess.react';
import Card from '../Card.react';

// Store import
import AlertsStore from '../../../stores/AlertsStore';
// Labels import
import {
  MY_PROFILE,
  MSG_ERR_PROFILEVIEW_ENTRY,
  MSG_GEN_PROFILEVIEW_UPDATE_SUCCESS
} from '../../../constants/LabelsConstants';

export default authenticatedComponent(
class ProfileView extends React.Component {

  constructor() {
    super();

    this.alertListener = this._onAlert.bind(this);
    AlertsStore.addChangeListener(this.alertListener);

    this.state = {
      hasError: false,
      isSuccess: false
    };
  }

  _onAlert() {
    if(AlertsStore.hasError){
      this.setState({
        hasError: true
      });
    setTimeout(() => {
      this.setState({
        hasError: false
      });
    }, 4000);
    } else if(AlertsStore.isSuccess) {
      this.setState({
        isSuccess: true
      });
      setTimeout(() => {
        this.setState({
          isSuccess: false
        });
      }, 4000);
    }
  }

  componentWillUnmount() {
    AlertsStore.removeChangeListener(this.alertListener);
  }

  render() {
    return (
        <Card icon="person" title={MY_PROFILE}>
          <ProfileBody />
        </Card>
    );
  }
}
);

/*
  errorArea() {

    if(this.state.hasError){
      return (
        <Error text={MSG_ERR_PROFILEVIEW_ENTRY} />
      );
    } else if(this.state.isSuccess) {
      return (
        <Success text={MSG_GEN_PROFILEVIEW_UPDATE_SUCCESS} />
      );
    }
  }
    return (
 <main id="Profile-Content" className="mdl-layout__content">
 <div id="Profile-Container" className="mdl-grid dash-content">
 <div id="Profile-Title" className="dash-title">
 <h4><i className="material-icons">person</i>{MY_PROFILE}</h4>
 {this.errorArea()}
 </div>
 <div id="Profile-Main" className="card">
 <ProfileBody />
 </div>
 </div>
 </main>
 );
 */


