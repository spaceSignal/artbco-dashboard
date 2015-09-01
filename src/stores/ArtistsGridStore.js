// Stores import
import BaseStore from './BaseStore';
// Constants import
import {
  ADD_ARTIST,
  DELETE_ARTIST,
  GET_ARTISTS,
  FIND_SEARCH,
  SEND_ARTISTS
} from '../constants/ArtistsGridConstants';

class ArtistsGridStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._artists = null;
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case SEND_ARTISTS:
        this._artists = action.artists;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get artists() {
    return this._artists;
  }
}

export default new ArtistsGridStore();