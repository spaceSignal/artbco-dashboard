// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';
// Constants import
import {
  ERROR,
  SUCCESS
} from '../constants/AlertsConstants';

export default {
  hasError: (message) => {
    AppDispatcher.dispatch({
      actionType: ERROR,
      message: message
    });
  },

  isSuccess: (message) => {
    AppDispatcher.dispatch({
      actionType: SUCCESS,
      message: message
    });
  }
};
