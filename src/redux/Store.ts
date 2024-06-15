import {createStore} from 'redux';
import { CounterReducer } from './Reducers/CounterReducer';

let store = createStore(CounterReducer);

export default store