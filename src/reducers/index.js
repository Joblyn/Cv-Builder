import { combineReducers } from 'redux';
import resumeDataReducer from './resumeDataReducer';

export default combineReducers({
  resumeData: resumeDataReducer
});