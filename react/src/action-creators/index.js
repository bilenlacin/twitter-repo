import axios from 'axios';
import {
  FETCH_TWEET,
  FETCH_DATA_COMPLETE,
  FETCH_DATA_ERROR,
  INSERT_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../action-types';

export const updateNote = (note) => {
  return async (dispatch) => {
    await axios.put('http://localhost:5000/' + note.id, note);

    dispatch({
      type: UPDATE_NOTE,
      payload: note,
    });
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    await axios.delete('http://localhost:5000/' + id);

    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  };
};

export const insertNote = (note) => {
  return async (dispatch) => {
    await axios.post('http://localhost:5000/', note);

    dispatch({
      type: INSERT_NOTE,
      payload: note,
    });
  };
};

export const fetchTweets = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TWEET });

    try {
      const { tweets } = await axios.get(
        'https://twitter-33155-default-rtdb.firebaseio.com/'
      );

      dispatch({
        type: FETCH_DATA_COMPLETE,
        payload: tweets,
      });
    } catch (err) {
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: err.message,
      });
    }
  };
};
