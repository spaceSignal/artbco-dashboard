// Packages import
import $ from 'jquery';
// Actions import
import DealersGridActions from '../actions/DealersGridActions';
import AlertActions from '../actions/AlertsActions';
// Labels import
import {
  MSG_ADD_NEW_DEALER_ERROR,
  MSG_ADD_NEW_DEALER_SUCCESS
} from '../constants/LabelsConstants';

const accessToken = localStorage.getItem('accessToken');
const url = `http://artbco-api.herokuapp.com:80/api/Galleries?access_token=${accessToken}`;

class DealersGridAPIUtils {

  getDealers() {
    Promise.resolve($.get(url))
      .then(res => {
        DealersGridActions.sendDealers(res);
      });
  }

  addDealer() {
    Promise.resolve($.ajax(url, {
      method: 'POST',
      dataType: 'json',
      data: {
        
      }
    }))
    .then(res => {
      let message = MSG_ADD_NEW_DEALER_SUCCESS;
      AlertsActions.isSuccess(message);
    })
    .catch(err => {
      let message =   MSG_ADD_NEW_DEALER_ERROR;
      AlertsActions.hasError(message);
    });
  }

  findSearch(filter) {
    const urlSearch = `http://artbco-api.herokuapp.com:80/api/Galleries?access_token=${accessToken}&filter[where][or][0][name]=${filter}&filter[where][or][1][address]=${filter}&filter[where][or][2][email]=${filter}&filter[where][or][3][city]=${filter}`;
    Promise.resolve($.get(urlSearch))
      .then(res => {
        DealersGridActions.sendDealers(res);
      });
  }
}

export default new DealersGridAPIUtils();