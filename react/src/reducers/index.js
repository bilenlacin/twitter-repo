import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import tweetsReducer from './tweetsReducer';

const reducers = combineReducers({
  notes: notesReducer,
  tweets: tweetsReducer,
});

export default reducers;
