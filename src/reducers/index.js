import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddShowDetailsReducer from './AddShowDetailsReducer';

export default combineReducers({
  auth: AuthReducer,
  showDetails: AddShowDetailsReducer
});
