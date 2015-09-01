// Packages import
import React, {PropTypes} from 'react';
// Components import
import SBox from './GridComponents/SBox.react';
import ActionButtons from './GridComponents/ActionButtons.react';
import Grid from './GridComponents/Grid.react.js';
import Pagination from './GridComponents/Pagination.react';


class CardGrid extends React.Component {

  render() {
    return (
      <div id="CardGrid">
        <SBox searchBtn={this.props.searchBtn} ref='sboxUp'/>
        <ActionButtons
        link={this.props.link}
        deleteBtn={this.props.deleteBtn} />
        <Grid divid="users" th1={this.props.th1} th2={this.props.th2} th3={this.props.th3} th4={this.props.th4}>
        {this.props.children}
        </Grid>
        <Pagination
        backClick={this.props.backClick}
        forwardClick={this.props.forwardClick}
        info={this.props.info}
        currentPage={this.props.currentPage}
        backDisabled={this.props.backDisabled}
        forwardDisabled={this.props.forwardDisabled} />
      </div>
    );
  }
}

CardGrid.propTypes = {
  searchBtn: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  deleteBtn: PropTypes.func.isRequired,
  backClick: PropTypes.func.isRequired,
  forwardClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  backDisabled: PropTypes.bool.isRequired,
  forwardDisabled: PropTypes.bool.isRequired,
  info: PropTypes.string.isRequired
};

export default CardGrid;
