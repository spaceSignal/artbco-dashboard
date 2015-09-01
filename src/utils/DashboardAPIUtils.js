// Packages import
import $ from 'jquery';
// Stores import
import DashboardActions from '../actions/DashboardActions';

const url = 'http://artbco-api.herokuapp.com:80/api/users/';

class DashboardAPIUtils {

  getUser() {
    let id = localStorage.getItem('id');
    let accessToken = localStorage.getItem('accessToken');

    Promise.resolve($.get(`${url}${id}?access_token=${accessToken}`))
    .then(res => {
      let fullName = `${res.firstName} ${res.lastName}`;
      DashboardActions.sendUser(fullName); // need avatar
    })
    .catch(err => {
      console.error(err);
    });
  }
}

export default new DashboardAPIUtils();