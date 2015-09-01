// Packages import
import React, {PropTypes} from 'react';
// Styles import
import '../../../../styles/Alerts.scss';

class inSuccess extends React.Component {

  render() {
    return (
      <div className="AlertComponent">
      <div className="alert alert-dismissible alert-success AlertComponent-div">
        {this.props.text}
      </div>
      </div>
    );
  }
}

inSuccess.propTypes = {
  text: PropTypes.string.isRequired
};

export default inSuccess;
