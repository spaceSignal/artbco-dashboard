// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';
// Constatants import
import {
  ADD_DEALER,
  DELETE_DEALER,
  GET_DEALERS,
  SEND_DEALERS,
  FIND_SEARCH
} from '../constants/DealersGridConstants';
// Utils import
import DealersGridAPIUtils from '../utils/DealersGridAPIUtils';

export default {

  getDealers: () => {
    DealersGridAPIUtils.getDealers();
    AppDispatcher.dispatch({
      actionType: GET_DEALERS
    });
  },

  sendDealers: (dealers) => {
    AppDispatcher.dispatch({
      actionType: SEND_DEALERS,
      dealers: dealers
    });
  },

  findSearch: (filter) => {
    DealersGridAPIUtils.findSearch(filter);
    AppDispatcher.dispatch({
      actionType: FIND_SEARCH
    });
  }
}