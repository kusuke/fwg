import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as types from '../types';
import top from '../common/redux/TopAction';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

const fetchData = (state = false, action) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  isFetching,
  fetchData,
  routing,
  top
});

export default rootReducer;
