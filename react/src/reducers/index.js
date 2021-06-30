import { combineReducers } from 'redux';
// import notesReducer from './notesReducer';
import tweetsReducer from './tweetsReducer';
import dailyReducer from './dailyReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
  // notes: notesReducer,
  tweets: tweetsReducer,
  daily: dailyReducer,
  profile: profileReducer,
});

export default reducers;
