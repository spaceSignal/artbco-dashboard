// Packages import
import React, {PropTypes} from 'react';

class ProfileInput extends React.Component {


  constructor () {
    super();
    this.state = {
      inputTextClassName: 'mdl-textfield mdl-js-textfield field is_upgraded'
    };
  }

  render() {
    return (
      <div className="field-row">
        <div className="mdl-cell mdl-cell--2-col field-label">{this.props.label}</div>
        <div className={`${this.state.inputTextClassName} ${this.props.className}`}>
          <input ref="input" id={this.props.elmId} type={this.props.type} className="mdl-textfield__input " placeholder={this.props.placeholder} readOnly={this.props.readOnly} />
          <label htmlFor={this.props.elmId} className="mdl-textfield__label"></label>
          <span className="mdl-textfield__error"> {this.props.errorMessage}</span>
        </div>
      </div>
    );
  }
}

ProfileInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  elmId: PropTypes.string,
  errorMessage: PropTypes.string,
  readOnly: PropTypes.bool
};

export default ProfileInput;
