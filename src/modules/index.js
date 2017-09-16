import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './reducers/navigation';
import home from './reducers/home';

export default combineReducers({
  routing: routerReducer,
  navigation,
  home
})