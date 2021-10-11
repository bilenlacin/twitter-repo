import { FETCH_DAILY_NEWS, FETCH_DAILY_REQUESTED } from '../action-types';
const initialState = { dailyTweets: [] };

const dailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILY_REQUESTED:
      return { dailyTweets: [] };
    case FETCH_DAILY_NEWS:
      return { dailyNews: action.payload };
    default:
      return state;
  }
};

export default dailyReducer;
