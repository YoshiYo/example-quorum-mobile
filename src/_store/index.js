import { createStore, combineReducers } from 'redux';
import welcome from '../_reducers/welcome';
import setup from '../_reducers/setup';

// eslint-disable-next-line
const REDUX_DEV_TOOL = () => { 
  // eslint-disable-next-line
  return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
};

const store = createStore(combineReducers({
  setup,
  welcome,
}), REDUX_DEV_TOOL());

export default store;
