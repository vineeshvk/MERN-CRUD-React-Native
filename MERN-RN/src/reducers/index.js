import { combineReducers } from 'redux';
import authReducers from './auth.reducer';

export default combineReducers({
	auth: authReducers
});
