// Packages import
import $ from 'jquery';
// Actions import
import UsersGridActions from '../actions/UsersGridActions';
import AlertsActions from '../actions/AlertsActions';
// Labels import
import {
  MSG_ADD_NEW_USER_ERROR,
  MSG_ADD_NEW_USER_SUCCESS
} from '../constants/LabelsConstants';

const accessToken = localStorage.getItem('accessToken');
const url = `http://artbco-api.herokuapp.com:80/api/users?access_token=${accessToken}`;

class UserGridAPIUtils {

  getUsers() {
    Promise.resolve($.get(url))
      .then(res => {
        UsersGridActions.sendUsers(res);
      });
  }

  addUser(lastName, firstName, email, password) {
    Promise.resolve($.ajax(url, {
      method: 'POST',
      dataType: 'json',
      data: {
        lastName: lastName,
        firstName: firstName,
        email: email,
        password: password
      }
    }))
    .then(res => {
      let message = MSG_ADD_NEW_USER_SUCCESS;
      AlertsActions.isSuccess(message);
    })
    .catch(err => {
      let message = MSG_ADD_NEW_USER_ERROR;
      AlertsActions.hasError(message);
    });
  }

  findSearch(filter) {
    const urlSearch = `http://artbco-api.herokuapp.com:80/api/users?access_token=${accessToken}&filter[where][or][0][lastName]=${filter}&filter[where][or][1][firstName]=${filter}&filter[where][or][2][email]=${filter}`;
    Promise.resolve($.get(urlSearch))
      .then(res => {
        UsersGridActions.sendUsers(res);
      });
  }
}

export default new UserGridAPIUtils();
