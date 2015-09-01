// Packages import
import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
// Components import
import Navbar from '../DashboardComponents/Navbar.react';
import Sidebar from '../DashboardComponents/Sidebar.react';
// Stores import
import LoginStore from '../../stores/LoginStore';
//Styles import
import '../../../styles/Dashboard.scss';

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  ComponentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    if(this.state.userLoggedIn) {
    return (
      <div id="main" className="mdl-layout__container">
        <div className="dash-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer is-upgraded" >
          <Navbar />
          <Sidebar />
          <RouteHandler />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
  }
}

export default Dashboard;


