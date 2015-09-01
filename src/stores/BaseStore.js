// Packages import
import {EventEmitter} from 'events';
// Dispatcher import
import AppDispatcher from '../dispatcher/AppDispatcher';

export default class BaseStore extends EventEmitter {
  constructor(){
    super();
  }
  subscribe(actionSubscribe){
    this._dispatchToken = AppDispatcher.register(actionSubscribe());
  }
  get dispatchToken(){
    return this._dispatchToken;
  }
  emitChange(event='CHANGE'){
    this.emit(event);
  }
  addChangeListener(cb, event='CHANGE'){
    this.on(event, cb);
  }
  removeChangeListener(cb, event='CHANGE'){
    this.removeListener(event, cb);
  }
}
