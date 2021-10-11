import { FETCH_IMAGE, FETCH_IMAGE_REQUESTED } from '../action-types';
const initialState = { profile: [] };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_REQUESTED:
      return { profile: [] };
    case FETCH_IMAGE:
      return { profile: action.payload };
    default:
      return state;
  }
};
export default profileReducer;
