import { combineReducers } from "redux";

// reducers
import dataReducer from './reducers/dataReducers';
import uiReducer from './reducers/uiReducers';

const rootReducers = combineReducers({
  data: dataReducer,
  UI: uiReducer
});

export default rootReducers;
