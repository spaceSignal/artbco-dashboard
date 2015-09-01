// Stores import
import BaseStore from './BaseStore';
// Constants import
import {
LOGIN_USER,
LOGOUT_USER,
LOGIN_ERROR
} from '../constants/LoginConstats';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._accessToken = null;
  }

  _saveId(id) {
    if(id) {
      localStorage.setItem('id', id);
    }
  }

  _saveUserType(userType) {
    if (userType) {
      localStorage.setItem('userType', userType);
    }
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case LOGIN_USER:
        this._accessToken = action.accessToken;
        let id = action.id;
        let userType = action.userType;
        this._saveId(id);
        this._saveUserType(userType);
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._accessToken = null;
        this.emitChange();
        break;
      case LOGIN_ERROR:
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get accessToken(){
    return this._accessToken;
  }

  isLoggedIn(){
    return !!this._accessToken;
  }
}

export default new LoginStore();
