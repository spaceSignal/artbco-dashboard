// Packages import
import React, {PropTypes} from 'react';

class Pagination extends React.Component {
  render() {
    return (
      <div id="Pagination" className="pagination-wrapper">

        <div id="Pagination-Buttons" className="padding-buttons">
          <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          onClick={this.props.backClick}
          disabled={this.props.backDisabled} >
            <i className="material-icons">arrow_back</i>
          </button>
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" disabled>
            <i>{this.props.currentPage}</i>
          </button>
          <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          onClick={this.props.forwardClick}
          disabled={this.props.forwardDisabled} >
            <i className="material-icons">arrow_forward</i>
          </button>
        </div>
        <div id="Pagination-Info" className="paging-info">{this.props.info}</div>
      </div>
    );
  }
}

Pagination.propTypes = {
  backClick: PropTypes.func.isRequired,
  forwardClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  backDisabled: PropTypes.bool.isRequired,
  forwardDisabled: PropTypes.bool.isRequired,
  info: PropTypes.string.isRequired
};

export default Pagination;
