// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';
// Constants import
import {
  SEND_USER_DATA,
  UPDATE_USER_DATA,
  ADD_NEW_USER
} from '../constants/ProfileConstants';
// Utils import
import ProfileAPIUtils from '../utils/ProfileAPIUtils';

export default {
  sendUserData: (firstName, lastName, email, phone) => {
    AppDispatcher.dispatch({
      actionType: SEND_USER_DATA,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone
    });
  },

  updateUser: () => {
    AppDispatcher.dispatch({
      actionType: UPDATE_USER_DATA
    });
  },

  addNewUser: (firstName, lastName, email, password) => {
    console.log('yumi');
    ProfileAPIUtils.createUser(firstName, lastName, email, password);
    AppDispatcher.dispatch({
      actionType: ADD_NEW_USER
    });
  }
};
