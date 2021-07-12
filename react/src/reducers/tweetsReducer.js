import {
  FETCH_TWEET,
  FETCH_DATA_COMPLETE,
  INSERT_TWEET,
  FILTER_TWEETS,
  INCREASE_TWEET_LIKE,
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
        tweets: action.payload.tweets.filter(
          (tweet) =>
            tweet.tweet
              .toLowerCase()
              .indexOf(action.payload.text.text.toLowerCase()) !== -1
        ),
      };
    case INCREASE_TWEET_LIKE:
      return {
        ...state,
        tweets: state.tweets.map((tweet) => {
          console.log(tweet.id);
          if (tweet.id === action.payload.tweetId) {
            console.log(true);
            //return action.payload.tweetCounter;
          }
        }),
      };

    default:
      return state;
  }
};
export default tweetsReducer;
