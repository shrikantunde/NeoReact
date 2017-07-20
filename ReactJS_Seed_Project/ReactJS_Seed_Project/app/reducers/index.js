import {combineReducers} from 'redux';
import robots from './robotReducers';


const rootReducer = combineReducers({
  robots
});

export default rootReducer;
