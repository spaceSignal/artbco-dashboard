// Packages import
import React, {PropTypes} from 'react';
// Components import
import Avatar from './ProfileComponents/Avatar.jsx';
import ActionsButtons from './ProfileComponents/ActionsButtons.jsx';

class CardProfile extends React.Component {

  render() {
    return (
      <div>
        <Avatar url={this.props.url} onClick={this.props.onClickAvatar} avatarBtn={this.props.avatarBtn} />
        <div className="body mdl-grid">
        {this.props.children}
        <ActionsButtons name={this.props.btnName} onClick={this.props.onClickEdit} />
        </div>
      </div>
    );
  }
}

CardProfile.propTypes = {
  url: PropTypes.string.isRequired,
  onClickAvatar: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
  avatarBtn: PropTypes.bool.isRequired
};

export default CardProfile;
