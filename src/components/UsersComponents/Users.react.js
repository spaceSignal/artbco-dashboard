// Packages import
import React from 'react';
// Components import
import Card from '../GeneralComponents/Card.react';
import CardGrid from '../GeneralComponents/CardGrid.react';
import GridRow from '../GeneralComponents/GridComponents/GridRow.react';
// Actions import
import UsersGridActions from '../../actions/UsersGridActions';
// Stores import
import UsersGridStore from '../../stores/UsersGridStore';
// Labels import
import {
  USERS,
  FIRSTNAME,
  LASTNAME,
  EMAIL_ADDRESS,
  ROLE
} from '../../constants/LabelsConstants';

class Users extends React.Component {

  constructor() {
    super();
    UsersGridActions.getUsers();
    this.state = {
      users: [],
      rows: [],
      usersLength: 0,
      page: 1,
      pointer: 0,
      nextPointer: 0,
      forwardDisabled: true,
      backDisabled: true,
      info: ''
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    UsersGridStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    let users = UsersGridStore.users;
    let usersLength = users.length;

    if (users.length < this.state.pointer) {
      this.setState({
        rows: users,
        info: this.state.info = `1-${usersLength} of ${usersLength}`,
        pointer: 10
      });
    } else {
      for (var i = 0; i < 10; i++) {
      this.state.rows[i] = users[i];
      }

      this.setState({
      users: users,
      usersLength: usersLength,
      pointer: 10,
      info: `1-10 of ${usersLength}`,
      page: 1,
      backDisabled: true,
      forwardDisabled: false
    });
    }
  }

  componentWillUnmount() {
    UsersGridStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
    <Card icon="people" title={USERS}>
      <CardGrid
      th1={LASTNAME}
      th2={FIRSTNAME}
      th3={EMAIL_ADDRESS}
      th4={ROLE}
      ref='sboxDown'
      searchBtn={this.handleSearchBtn.bind(this)}
      link='addNewUser'
      deleteBtn={()=>{}}
      forwardClick={this.handlerForwardClick.bind(this)}
      backClick={this.handlerBackClick.bind(this)}
      currentPage={this.state.page}
      info={this.state.info}
      forwardDisabled={this.state.forwardDisabled}
      backDisabled={this.state.backDisabled} >
      {this.state.rows.map(function(row){
      return (
        <GridRow key={row.id} td1={row.lastName} td2={row.firstName} td3={row.email} td4={row.userType} />
      );
      })}
      </CardGrid>
    </Card>
    );
  }

  handleSearchBtn() {
    let filter = this.refs.sboxDown.refs.sboxUp.refs.sbox.getDOMNode().value;
    UsersGridActions.findSearch(filter);
  }

  // I need fix this logic
  handlerForwardClick() {
    let rows = [];
    let count = 0;

    if (this.state.usersLength < this.state.pointer + 10) {
      for (let i = this.state.pointer; i < this.state.users.length; i++) {
        rows[count] = this.state.users[i];
        count++;
      }
      this.setState({
      rows: rows,
      forwardDisabled: true,
      backDisabled: false,
      info: `${this.state.page * 10 + 1}-${this.state.usersLength} of ${this.state.usersLength}`,
      page: this.state.page + 1
    });
    } else {
      let pointer = this.state.pointer;
      this.state.nextPointer = pointer + 10;
      for (let i = pointer; i < this.state.nextPointer; i++) {
        rows[count] = this.state.users[i];
        count++;
      }
      this.setState({
      rows: rows,
      backDisabled: false,
      info: `${this.state.page * 10 + 1}-${this.state.nextPointer} of ${this.state.usersLength}`,
      page: this.state.page + 1,
      pointer: this.state.pointer + 10
    });
    }
  }

  // I need fix this logic
  handlerBackClick() {
    let users = this.state.users;
    let rows = [];
    let count = 0;

    if (this.state.page === 2) {
      this._onChange();
    } else {
      this.state.nextPointer = this.state.pointer;
      for (let i = this.state.pointer - 10; i < this.state.nextPointer; i++) {
          rows[count] = users[i];
          count++;
      }

      this.setState({
        rows: rows,
        forwardDisabled: false,
        pointer: this.state.pointer - 10,
        page: this.state.page - 1,
        info: `${this.state.nextPointer - 10 + 1}-${this.state.pointer} of ${this.state.usersLength}`
      });
    }
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  };

}

export default Users;
