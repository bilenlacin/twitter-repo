import axios from 'axios';
import {
  FETCH_DATA,
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

export const fetchNotes = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA });

    try {
      const { data } = await axios.get('http://localhost:5000/');

      dispatch({
        type: FETCH_DATA_COMPLETE,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: err.message,
      });
    }
  };
};
