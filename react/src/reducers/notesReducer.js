import {
  FETCH_TWEET,
  FETCH_DATA_COMPLETE,
  FETCH_DATA_ERROR,
  INSERT_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEET:
      return { loading: true, error: null, tweets: [] };
    case FETCH_DATA_COMPLETE:
      return { loading: false, error: null, notes: action.payload };
    case FETCH_DATA_ERROR:
      return { loading: false, notes: [], error: action.payload };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id.toString() === action.payload.id) {
            return action.payload;
          }
          return note;
        }),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(
          (note) => note.id.toString() !== action.payload
        ),
      };
    case INSERT_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export default reducer;
