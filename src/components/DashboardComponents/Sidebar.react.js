// Packages import
import React from 'react';
// Components import
import Profile from './Profile.react';
import Menu from './Menu.react';

class Sidebar extends React.Component {

  render() {
    return (
      <div id="Sidebar" className="dash-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <Profile />
        <Menu />
      </div>
    );
  }
}

export default Sidebar;
