// Packages import
import $ from 'jquery';
// Actions import
import ProfileActions from '../actions/ProfileActions';
import AlertsActions from '../actions/AlertsActions';

const url = 'http://artbco-api.herokuapp.com:80/api/users/';

class ProfileAPIUtils {

  constructor() {
    this._id = localStorage.getItem('id');
    this._accessToken = localStorage.getItem('accessToken');
  }

  getUser() {

    Promise.resolve($.get(`${url}${this._id}?access_token=${this._accessToken}`))
    .then(res => {
      let firstName = res.firstName;
      let lastName = res.lastName;
      let email = res.email;
      let phone = res.phone;
      ProfileActions.sendUserData(firstName, lastName, email, phone); // need avatar
    })
    .catch(err => {
      console.error(err);
    });
  }

  updateUser(firstName, lastName, email, phone) {
    Promise.resolve($.ajax(`${url}${this._id}?access_token=${this._accessToken}`, {
      method: 'PUT',
      dataType: 'json',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
      }
    }))
      .then(res => {
        let firstName = res.firstName;
        let lastName = res.lastName;
        let email = res.email;
        let phone = res.phone;
        ProfileActions.sendUserData(firstName, lastName, email, phone) // need avatar
        AlertsActions.isSuccess();
      })
      .catch(err => {
        AlertsActions.hasError();
      });
  }

  createUser(firstName, lastName, email, password) {
    Promise.resolve($.ajax(url, {
      method: 'POST',
      dataType: 'json',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }
    }))
      .then(res => {
        AlertsActions.isSuccess();
      })
      .catch(err => {
        AlertsActions.hasError();
      });
  }
}


export default new ProfileAPIUtils();
