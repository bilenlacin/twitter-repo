import {
  FETCH_TWEET,
  FETCH_DATA_COMPLETE,
  INSERT_TWEET,
<<<<<<< HEAD
  FILTER_TWEETS,
=======
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf
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
<<<<<<< HEAD
    case FILTER_TWEETS:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet.tweet.toLowerCase().includes(action.payload.text.toLowerCase())
        ),
      };
=======
>>>>>>> c2884ededbe4fd49e717ff353b57a6c3d11170cf

    default:
      return state;
  }
};
export default tweetsReducer;
