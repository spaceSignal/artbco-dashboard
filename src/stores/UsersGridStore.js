// Stores import
import BaseStore from './BaseStore';
// Constants import
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  FIND_SEARCH,
  SEND_USERS
} from '../constants/UserGridConstants';

class UsersGridStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._users = null;
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case SEND_USERS:
        this._users = action.users;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get users() {
    return this._users;
  }
}

export default new UsersGridStore();