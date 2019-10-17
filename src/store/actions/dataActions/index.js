import {
  LOADING_DATA,
  SET_OPINIONS
} from '../../types';
import axios from 'axios';

// Get all screams
export const getOpinions = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/screams')
    .then((res) => {
      dispatch({
        type: SET_OPINIONS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_OPINIONS,
        payload: []
      });
    });
};