// Stores import
import BaseStore from './BaseStore';
// Constants import

class RoleStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
  }

  _registerToActions(action) {
    switch (action.actionType) {
      default:
        break;
    }
  }

  get userType() {
    return localStorage.getItem('userType');
  }
}

export default new RoleStore();