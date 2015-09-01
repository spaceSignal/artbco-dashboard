// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';
// Utils import
import RouterContainer from '../utils/RouterContainer';
// Constants import
import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERROR
} from '../constants/LoginConstats.js';

export default {
  loginUser: (accessToken, id, userType) => {
    let savedId = localStorage.getItem('accessToken');

    if(savedId !== accessToken) {
      let nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('accessToken', accessToken);
    }
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      accessToken: accessToken,
      id: id,
      userType: userType
    });
  },

  logoutUser: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('userType');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  },

  hasError: () => {
    AppDispatcher.dispatch({
      actionType: LOGIN_ERROR
    });
  }
};
