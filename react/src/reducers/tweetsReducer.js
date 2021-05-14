import { FETCH_TWEET, FETCH_DATA_COMPLETE } from '../action-types';

const initialState = { tweets: [] };

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEET:
      return { tweets: [] };
    case FETCH_DATA_COMPLETE:
      return {
        tweets: action.payload,
      };
    default:
      return state;
  }
};
export default tweetsReducer;
