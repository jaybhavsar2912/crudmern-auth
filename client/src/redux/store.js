import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerDetail, { deleteReducer } from './reducer';
import { userReducer } from './reducer/user';

const reducer = combineReducers({
  data: reducerDetail,
  delete: deleteReducer,
  userdata: userReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
