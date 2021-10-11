import {
  FETCH_TWEET,
  FETCH_DATA_COMPLETE,
  INSERT_TWEET,
  FILTER_TWEETS,
  INCREASE_TWEET_LIKE,
  FETCH_LIKE_COMPLETE,
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
    case FETCH_LIKE_COMPLETE:
      return {
        tweets: [
          ...state.tweets.map((tweet) => {
            if (tweet.id === action.payload.id) {
              return (tweet = action.payload);
            } else return tweet;
          }),

          // ...state.tweets.map((tweet) =>
          //   tweet.id === action.payload.id ? (tweet = action.payload) : tweet
          // ),
        ],
      };
    //

    default:
      return state;
  }
};
export default tweetsReducer;

// tweets: action.payload.tweets.map((tweet) => {
//   console.log(tweet.id);
//   if (tweet.id === action.payload.tweetId) {
//     console.log(true);
//     return tweet;
//   }
// }),
