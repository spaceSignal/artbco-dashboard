// Packages import
import React from 'react';

// Labels and placeholders
import {
    ARTBCO_DASHBOARD_TITLE
} from '../../constants/LabelsConstants.js';


class Navbar extends React.Component {

  render() {
    return (
      <header id="header" className="dash-header mdl-layout__header mdl-color--white mdl-color--grey-100 mdl-color-text--grey-600 is-casting-shadow">
        <div className="mdl-layout__header-row Dashboard-Nav">
            <span
              className="navbar-brand mdl-layout-title">
              {ARTBCO_DASHBOARD_TITLE}
            </span>
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-js-textfield mdl-textfield--expandable navbar-buttons">
            <button className="mdl-button mdl-js-button mdl-button--primary nav-button" id="Navbar-Messages-button" >
              <i className="material-icons">chat_bubble_outline</i>
            </button>
            <button className="mdl-button mdl-js-button mdl-button--primary nav-button" id="Navbar-Notifications-button" >
              <i className="material-icons">notifications_none</i>
            </button>
         </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
