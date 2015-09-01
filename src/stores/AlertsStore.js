// Stores import
import BaseStore from './BaseStore';
// Constants import
import {
  ERROR,
  SUCCESS
} from '../constants/AlertsConstants';

class AlertsStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._hasError = false;
    this._isSuccess = false;
    this._message = '';
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case ERROR:
        this._hasError = true;
        this._message = action.message;
        this.emitChange();
        break;
      case SUCCESS:
        this._isSuccess = true;
        this._message = action.message;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get hasError() {
    return this._hasError;
  }

  get isSuccess() {
    return this._isSuccess;
  }

  get message() {
    return this._message;
  }
}

export default new AlertsStore();
