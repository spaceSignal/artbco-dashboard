// Stores import
import BaseStore from './BaseStore';
// Constants import
import {
  SEND_USER,
} from '../constants/DashboardConstants.js';

class DashboardStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._fullName = null;
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case SEND_USER:
        this._fullName = action.fullName;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get fullName() {
    return this._fullName;
  }
}

export default new DashboardStore();
