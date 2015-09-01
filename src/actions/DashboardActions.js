// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';
// Constants import
import {
  SEND_USER,
} from '../constants/DashboardConstants';

export default {
  sendUser: fullName => {
    AppDispatcher.dispatch({
      actionType: SEND_USER,
      fullName: fullName
    });
  },

  sendUserData: (firstName, lastName, email, phone) => {
    AppDispatcher.dispatch({
      actionType: SEND_USER_DATA,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone
    });
  }
};
