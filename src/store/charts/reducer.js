import { GET_INCOMING_DATA_REQUEST, GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_ERROR  } from './constants';

const initialState = {
  incomingCharts:  [],
  filterCharts: [],
  pages: 0,
  error: "",
  loading: false
};

export const charts = (state = initialState, action) => {
  switch (action.type) {

    case GET_INCOMING_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_INCOMING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        incomingCharts: action.payload.charts,
      };

    case GET_INCOMING_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
