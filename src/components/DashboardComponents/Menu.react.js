// Packages import
import React from 'react';
import {Link} from 'react-router';
// Utils import
import LoginAPIUtils from '../../utils/LoginAPIUtils';
// Stores import
import RoleStore from '../../stores/RoleStore';
// import labels
import {
    USERS,
    DEALERS,
    ARTWORK,
    ARTISTS,
    EVENTS,
    ORDERS,
    STATS,
    SYSTEM,
    WORKLIST,
    MY_PROFILE,
  LOGOUT
} from '../../constants/LabelsConstants.js';

class Menu extends React.Component {

  constructor() {
    super();
    let userType = RoleStore.userType;
    this.state = {
      userType: userType
    };
  }

  render() {
    if (this.state.userType === 'admin') {
      return this.isAdmin();
    } else if (this.state.userType === 'abc-cs') {
      return this.isABCCS();
    } else if (this.state.userType === 'abc-c') {
      return this.isABCC();
    } else if (this.state.userType === 'abc-da') {
      return this.isABCDA();
    } else if (this.state.userType === 'dealer') {
      return this.isDealer();
    }
  }

  personalMenu() {
    return (
      <div id="Profile-Menu-My-Profile">
        <Link to="myprofile"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">person</i>{MY_PROFILE}</a></Link>
        <a href="#" onClick={this.logout.bind(this)} className="mdl-navigation__link dash-menu-item"><i className="material-icons">close</i>{LOGOUT}</a>
        <hr className=""/>
      </div>
    );
  }

  isAdmin() {
    return (
      <nav className="dash-navigation mdl-navigation mdl-color--blue-grey-800">
        {this.personalMenu()}
        <Link to="users"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">people</i>{USERS}</a></Link>
        <Link to="dealers"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">store_mall_directory</i>{DEALERS}</a></Link>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">color_lens</i>{ARTWORK}</a>
        <Link to="artists"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">brush</i>{ARTISTS}</a></Link>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">event</i>{EVENTS}</a>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">shopping_cart</i>{ORDERS}</a>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">poll</i>{STATS}</a>
        <hr className=""/>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">settings_applications</i>{SYSTEM}</a>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">list</i>{WORKLIST}</a>
      </nav>
    );
  }

  isABCCS() {
    return (
      <nav className="dash-navigation mdl-navigation mdl-color--blue-grey-800">
        {this.personalMenu()}
        <Link to="users"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">people</i>{USERS}</a></Link>
        <Link to="dealers"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">store_mall_directory</i>{DEALERS}</a></Link>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">color_lens</i>{ARTWORK}</a>
        <Link to="artists"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">brush</i>{ARTISTS}</a></Link>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">event</i>{EVENTS}</a>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">shopping_cart</i>{ORDERS}</a>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">poll</i>{STATS}</a>
        <hr className=""/>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">list</i>{WORKLIST}</a>
      </nav>
      );
  }

  isABCC() {
    return (
      <nav className="dash-navigation mdl-navigation mdl-color--blue-grey-800">
        {this.personalMenu()}
        <Link to="dealers"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">store_mall_directory</i>{DEALERS}</a></Link>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">color_lens</i>{ARTWORK}</a>
        <Link to="artists"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">brush</i>{ARTISTS}</a></Link>
        <hr className=""/>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">settings_applications</i>{SYSTEM}</a>
      </nav>
      );
  }

  isABCDA() {
    return (
      <nav className="dash-navigation mdl-navigation mdl-color--blue-grey-800">
        {this.personalMenu()}
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">poll</i>{STATS}</a>
      </nav>
      );
  }

  isDealer() {
    return (
      <nav className="dash-navigation mdl-navigation mdl-color--blue-grey-800">
        {this.personalMenu()}
        <Link to="dealers"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">store_mall_directory</i>{DEALERS}</a></Link>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">color_lens</i>{ARTWORK}</a>
        <Link to="artists"><a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">brush</i>{ARTISTS}</a></Link>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">event</i>{EVENTS}</a>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">shopping_cart</i>{ORDERS}</a>
        <hr className=""/>
        <a href="#" className="mdl-navigation__link dash-menu-item"><i className="material-icons">list</i>{WORKLIST}</a>
      </nav>
      );
  }

    logout(e) {
        e.preventDefault();
        LoginAPIUtils.logout();
  }
}

export default Menu;
