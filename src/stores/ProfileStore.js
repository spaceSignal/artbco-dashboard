// Stores import
import BaseStore from './BaseStore';
// Constants import
import {
  SEND_USER_DATA
} from '../constants/ProfileConstants';

class ProfileStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._firstName = null;
    this._lastName = null;
    this._email = null;
    this._phone = null;
    this._avatar = null;
  }

  _registerToActions(action){
    switch (action.actionType) {
      case SEND_USER_DATA:
        this._firstName = action.firstName;
        this._lastName = action.lastName;
        this._email = action.email;
        this._phone = action.phone;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get email() {
    return this._email;
  }

  get phone() {
    return this._phone;
  }
}

export default new ProfileStore();
