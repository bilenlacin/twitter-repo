import axios from 'axios';
import {
  FETCH_TWEET,
  FETCH_DATA_COMPLETE,
  FETCH_DATA_ERROR,
  INSERT_TWEET,
  FETCH_DAILY_NEWS,
  DELETE_NOTE,
  FETCH_IMAGE,
  FETCH_DAILY_REQUESTED,
  FETCH_IMAGE_REQUESTED,
  FILTER_TWEETS,
  INCREASE_TWEET_LIKE,
  FETCH_LIKE_COMPLETE,
} from '../action-types';

export const deleteNote = (id) => {
  return async (dispatch) => {
    await axios.delete('http://localhost:5000/' + id);
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  };
};

export const insertTweet = (myTweet) => {
  return async (dispatch) => {
    await axios.post('https://609ed01a5f32be00171ccf8c.mockapi.io/tweets', {
      tweet: myTweet.tweet,
      username: myTweet.username,
      email: myTweet.email,
      profileImg: myTweet.profileImg,
      img: '',
    });

    dispatch({
      type: INSERT_TWEET,
      payload: myTweet,
    });
  };
};

export const fetchTweets = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TWEET });

    axios
      .get('https://609ed01a5f32be00171ccf8c.mockapi.io/tweets')
      .then((response) => {
        dispatch({
          type: FETCH_DATA_COMPLETE,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: error,
        });
      });
  };
};
export const filterTweets = (text) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TWEET });

    axios
      .get('https://609ed01a5f32be00171ccf8c.mockapi.io/tweets')
      .then((response) => {
        dispatch({
          type: FILTER_TWEETS,
          payload: {
            tweets: response.data,
            text: text,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: error,
        });
      });
  };
};

export const fetchDailyNews = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DAILY_REQUESTED });

    axios
      .get('https://609ed01a5f32be00171ccf8c.mockapi.io/dailyNews')
      .then((response) => {
        dispatch({
          type: FETCH_DAILY_NEWS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: error,
        });
      });
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_IMAGE_REQUESTED });

    axios
      .get('https://609ed01a5f32be00171ccf8c.mockapi.io/profileimg')
      .then((response) => {
        dispatch({
          type: FETCH_IMAGE,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: error,
        });
      });
  };
};

export const increaseTweetLike = (tweetId, tweetCounter, liked) => {
  return async (dispatch) => {
    await axios
      .put('https://609ed01a5f32be00171ccf8c.mockapi.io/tweets/' + tweetId, {
        like: tweetCounter,
        liked: liked,
      })
      .then((response) => {
        dispatch({
          type: FETCH_LIKE_COMPLETE,
          payload: response.data,
        });
      });
  };
};

export const decreaseTweetLike = (tweetId, tweetCounter, liked) => {
  return async (dispatch) => {
    await axios
      .put('https://609ed01a5f32be00171ccf8c.mockapi.io/tweets/' + tweetId, {
        like: tweetCounter,
        liked: liked,
      })
      .then((response) => {
        dispatch({
          type: FETCH_LIKE_COMPLETE,
          payload: response.data,
        });
      });
  };
};

// export const decreaseLike = () => {
//   return async (dispatch) => {
//     //  dispatch({ type: FETCH_TWEET });

//     axios
//       .get('https://609ed01a5f32be00171ccf8c.mockapi.io/tweets')
//       .then((response) => {
//         dispatch({
//           type: FETCH_LIKE_COMPLETE,
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: FETCH_DATA_ERROR,
//           payload: error,
//         });
//       });
//   };
// };
// .then((response) => {
//   // console.log(response);

//   dispatch({
//     type: INCREASE_TWEET_LIKE,
//     payload: response.data,
//   });
// });
// dispatch({ type: FETCH_TWEET });

//  .get('https://609ed01a5f32be00171ccf8c.mockapi.io/tweets')
//payload: { tweets: response.data, tweetId: tweetId },
// dispatch({
//   type: INCREASE_TWEET_LIKE,
//   payload: {

//     tweetId,
//     tweetCounter,
//   },
// });
