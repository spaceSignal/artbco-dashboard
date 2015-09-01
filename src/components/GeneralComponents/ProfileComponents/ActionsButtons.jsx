// Packages import
import React, {PropTypes} from 'react';

class ActionsButtons extends React.Component {

  constructor () {
    super();
    this.state = {
      buttonClassName: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored'
    };
  }
  render() {
    return (
      <div className='button-group'>
        <button
          className={this.state.buttonClassName}
          onClick={this.props.onClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

ActionsButtons.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ActionsButtons;
