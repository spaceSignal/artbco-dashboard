// Packages import
import $ from 'jquery';
// Actions import
import ArtistsGridActions from '../actions/ArtistsGridActions';
import AlertActions from '../actions/AlertsActions';
// Labels import
import {
  MSG_ADD_NEW_ARTIST_ERROR,
  MSG_ADD_NEW_ARTIST_SUCCESS
} from '../constants/LabelsConstants';

const accessToken = localStorage.getItem('accessToken');
const url = `http://artbco-api.herokuapp.com:80/api/Artists?access_token=${accessToken}`;

class ArtistsGridAPIUtils {

  getArtists() {
    Promise.resolve($.get(url))
      .then(res => {
        ArtistsGridActions.sendArtists(res);
      });
  }

  addArtist() {
    Promise.resolve($.ajax(url, {
      method: 'POST',
      dataType: 'json',
      data: {
        
      }
    }))
    .then(res => {
      let message = MSG_ADD_NEW_ARTIST_SUCCESS;
      AlertsActions.isSuccess(message);
    })
    .catch(err => {
      let message = MSG_ADD_NEW_ARTIST_ERROR;
      AlertsActions.hasError(message);
    });
  }

  findSearch(filter) {
    const urlSearch = `http://artbco-api.herokuapp.com:80/api/Artists?access_token=${accessToken}&filter[where][or][0][lastName]=${filter}&filter[where][or][1][firstName]=${filter}&filter[where][or][2][email]=${filter}&filter[where][or][3][nickname]=${filter}`;
    Promise.resolve($.get(urlSearch))
      .then(res => {
        ArtistsGridActions.sendArtists(res);
      });
  }
}

export default new ArtistsGridAPIUtils();