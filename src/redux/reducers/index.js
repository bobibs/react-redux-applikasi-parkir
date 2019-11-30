import { combineReducers } from 'redux';
import Counter from './counterReducers';

export default combineReducers({
	counter: Counter
});
