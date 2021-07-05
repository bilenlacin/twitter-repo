import {
  FETCH_TWEET,
  FETCH_DATA_COMPLETE,
  INSERT_TWEET,
  FILTER_TWEETS,
} from '../action-types';

const initialState = { tweets: [] };

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEET:
      return { tweets: [] };
    case FETCH_DATA_COMPLETE:
      return {
        tweets: action.payload,
      };
    case INSERT_TWEET:
      return { ...state, tweets: [...state.tweets, action.payload] };
    case FILTER_TWEETS:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet.tweet.toLowerCase().includes(action.payload.text.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
export default tweetsReducer;
