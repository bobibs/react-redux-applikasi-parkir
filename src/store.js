import { createStore } from 'redux';
import Reducer from './redux/reducers';

const InitialState = {};

const store = createStore(Reducer, InitialState);

export default store;
