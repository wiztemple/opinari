import {
  SET_OPINIONS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_OPINION,
  SUBMIT_COMMENT
} from '../types';

const initialState = {
  opinions: [],
  opinion: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_OPINIONS:
      return {
        ...state,
        opinions: action.payload,
        loading: false
      };
    case SET_OPINION:
      return {
        ...state,
        opinion: action.payload
      };
    default:
      return state;
  }
}
