//Packages import
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
// Constants
import {
    TT_GRID_ACTIONBUTTONS_ADD,
    TT_GRID_ACTIONBUTTONS_DELETE
} from '../../../constants/LabelsConstants';

class ActionButtons extends React.Component {

  render() {
    return (
      <div id="ActionButtons" className="action-button-wrapper mdl-js-textfield mdl-textfield--expandable">
        <Link to={this.props.link}>
        <button
        className="mdl-button mdl-js-button mdl-button--primary"
        id="add" >
          <i className="material-icons">add</i>
        </button>
        </Link>
        <div className="mdl-tooltip" htmlFor="add">
          {TT_GRID_ACTIONBUTTONS_ADD}
        </div>
        <button
        className="mdl-button mdl-js-button mdl-button--primary"
        id="delete"
        onClick={this.props.deleteBtn}>
          <i className="material-icons">delete</i>
        </button>
        <div className="mdl-tooltip" htmlFor="delete">
          {TT_GRID_ACTIONBUTTONS_DELETE}
        </div>
      </div>
    );
  }
}

ActionButtons.propTypes = {
  deleteBtn: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
};

export default ActionButtons;