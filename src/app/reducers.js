import { combineReducers } from 'redux';
import CreateEventReducer from '../create-event/CreateEventReducer';

// will have reducers from domain specific folders
export default combineReducers({
  CreateEventReducer
});
