// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';
// Constants import
import {
  ADD_ARTISTS,
  DELETE_ARTISTS,
  GET_ARTISTS,
  FIND_SEARCH,
  SEND_ARTISTS
} from '../constants/ArtistsGridConstants';
// Utils import
import ArtistsGridAPIUtils from '../utils/ArtistsGridAPIUtils';

export default {

  addArtists: () => {
    AppDispatcher.dispatch({
      actionType: ADD_ARTISTS
    });
  },

  deleteArtists: () => {
    AppDispatcher.dispatch({
      actionType: DELETE_ARTISTS
    });
  },

  getArtists: () => {
    ArtistsGridAPIUtils.getArtists();
    AppDispatcher.dispatch({
      actionType: GET_ARTISTS
    });
  },

  sendArtists: (artists) => {
    AppDispatcher.dispatch({
      actionType: SEND_ARTISTS,
      artists: artists
    });
  },

  findSearch: (filter) => {
    ArtistsGridAPIUtils.findSearch(filter);
    AppDispatcher.dispatch({
      actionType: FIND_SEARCH
    });
  }
};