import $ from 'jquery';

const uri = `https://api.sendgrid.com/api/mail.send.json`;
const api_user = 'app37546675@heroku.com';
const api_password = 'gibu9ah55890';
const resetEmail = 'reset@artbco.com';
const subject = 'New password for ArtBCo Dashboard';

class ResetPasswordAPIUtils {

  reset(email){
  Promise.resolve($.ajax(uri, {
    method: 'POST',
    dataType: 'jsonp',
    data: {
      api_user: api_user,
      api_key: api_password,
      to: email,
      subject: subject,
      from: resetEmail,
      html: 'email de prueba'
    }
  }));
  };
}

export default new ResetPasswordAPIUtils();
