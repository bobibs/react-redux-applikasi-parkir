import { MOBIL, MOTOR } from '../types';

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MOBIL:
			console.log('reducer', action);
			return state + action.payload * 2000;

		case MOTOR:
			console.log('reducer', action);
			return state + action.payload * 1000;

		default:
			return state;
	}
};
