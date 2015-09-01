// Packages import
import React, {PropTypes} from 'react';
// Styles import
import '../../../../styles/Alerts.scss';

class onError extends React.Component {

  render() {
    return (
      <div className="AlertComponent">
      <div className="alert alert-dismissible alert-danger AlertComponent-div">
        {this.props.text}
      </div>
      </div>
    );
  }
}

onError.propTypes = {
  text: PropTypes.string.isRequired
};

export default onError;
