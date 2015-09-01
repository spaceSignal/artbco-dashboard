// Stores import
import BaseStore from './BaseStore';
// Constants import
import {
  ADD_DEALER,
  DELETE_DEALER,
  GET_DEALERS,
  FIND_SEARCH,
  SEND_DEALERS
} from '../constants/DealersGridConstants'

class DealersGridStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._dealers = null;
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case SEND_DEALERS:
        this._dealers = action.dealers;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get dealers() {
    return this._dealers;
  }
}

export default new DealersGridStore();