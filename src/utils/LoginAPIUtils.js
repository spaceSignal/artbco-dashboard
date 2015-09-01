// Packages import
import $ from 'jquery';
// Actions import
import LoginActions from '../actions/LoginActions';

const uri = 'http://artbco-api.herokuapp.com:80/api/users/login';
const ttl = 31104000000; // 1 year

class LoginAPIUtils {

  login(email, password) {
    Promise.resolve($.ajax(uri, {
      method: 'POST',
      dataType: 'json',
      data: {
        email: email,
        password: password,
        ttl: ttl
      }
    }))
      .then(res => {
        let accessToken = res.id;
        let id = res.userId;
        let userType = 'admin';
        LoginActions.loginUser(accessToken, id, userType);
        return true;
      })
      .catch( () => {
        LoginActions.hasError();
      });
    };

  logout() {
    LoginActions.logoutUser();
  }
}

export default new LoginAPIUtils();
