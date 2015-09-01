// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';
// Constants import
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  FIND_SEARCH,
  SEND_USERS
} from '../constants/UserGridConstants';
// Utils import
import UsersGridAPIUtils from '../utils/UsersGridAPIUtils';

export default {

  addUser: (lastName, firstName, email, password) => {
    UsersGridAPIUtils.addUser(lastName, firstName, email, password);
    AppDispatcher.dispatch({
      actionType: ADD_USER
    });
  },

  deleteUser: () => {
    AppDispatcher.dispatch({
      actionType: DELETE_USER
    });
  },

  getUsers: () => {
    UsersGridAPIUtils.getUsers();
    AppDispatcher.dispatch({
      actionType: GET_USERS
    });
  },

  sendUsers: (users) => {
    AppDispatcher.dispatch({
      actionType: SEND_USERS,
      users: users
    });
  },

  findSearch: (filter) => {
    UsersGridAPIUtils.findSearch(filter);
    AppDispatcher.dispatch({
      actionType: FIND_SEARCH
    });
  }
};
