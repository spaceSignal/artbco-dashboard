// Packages import
import React, {PropTypes} from 'react';
// Components import
import ActionsButtons from './ActionsButtons.jsx';
// Constants
import {
  UPLOAD
} from '../../../constants/LabelsConstants';


class Avatar extends React.Component {

  constructor() {
    super();
    this.state = {
      avatarBtn: false
    };
  }

  render() {
    return (
      <div className="overview">
        <div className="p-avatar">
          <div className="p-avatar-img">
            <img src={this.props.url} />
          </div>
          <div className="p-avatar-upload">
          {this.avatarBtn()}
          </div>
        </div>
      </div>
    );
  }

  avatarBtn() {
    this.state.avatarBtn = this.props.avatarBtn;
    if (this.state.avatarBtn) {
      return (
        <ActionsButtons onClick={this.props.onClick} name={UPLOAD} />
      );
    }
  }
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Avatar;
