// Packages import
import React from 'react';
import jQuery from 'jquery';

// Utils import
import DashboardAPIUtils from '../../utils/DashboardAPIUtils';
// Stores import
import DashboardStore from '../../stores/DashboardStore';

class Profile extends React.Component {

  constructor() {
    super();
    DashboardAPIUtils.getUser();
    this.state = {
      fullName: '',
      personalMenu: false,
      avatar: '../../../img/avatarDefault.png'
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    DashboardStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    let fullName = DashboardStore.fullName;
    this.setState({
      fullName: fullName
    });
  }

  // TODO: Needs to be worked in the next version... b/c we are updating the Menu component through a jQuery call from this one.
  _changePersonalProfileState(e) {
    e.preventDefault();

    this.state.personalMenu = !this.state.personalMenu;

    if (this.state.personalMenu === false){
      jQuery('#Profile-Menu-My-Profile').hide(500);
    } else {
      jQuery('#Profile-Menu-My-Profile').show(500);
    }

    this.setState({
      personalMenu: this.state.personalMenu
    });

  }


  render() {
    return (
      <header className="dash-drawer-header">
          <img
            srcSet={this.state.avatar}
            alt="avatar"
            className="dash-avatar"
            />
        <div className="dash-avatar-dropdown">
          <span>{this.state.fullName}</span>
          <div className="mdl-layout-spacer"></div>
          <button id="Sidebar-Profile-arrow" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple" onClick={this._changePersonalProfileState.bind(this)}>

            {this.dropdownArrow()}
            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span>
          </button>
        </div>
      </header>
    );
  }

  dropdownArrow() {
    if (this.state.personalMenu) {
      return (
          <i className="material-icons">arrow_drop_down</i>
      );
    } else {
      return (
          <i className="material-icons">arrow_drop_up</i>
      );
    }
  }
  componentWillUnmount() {
    DashboardStore.removeChangeListener(this.changeListener);
  }
}

export default Profile;
