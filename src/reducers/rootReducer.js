import authReducer from './authReducer'
import locationReducer from './locationReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: authReducer,
	location: locationReducer,
});

export default rootReducer
