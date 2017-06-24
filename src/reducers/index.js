import {combineReducers} from 'redux';
import helloReducer from "./HelloReducer";

// you can create other reducers and put them in the combine Reducers middleWare.
export default combineReducers({
  helloReducer
})
