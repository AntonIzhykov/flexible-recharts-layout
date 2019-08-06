import { GET_INCOMING_DATA_REQUEST, GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_ERROR } from './constants';

export const getIncomingDataRequest = () => ({
  type: GET_INCOMING_DATA_REQUEST
});

export const getIncomingDataSuccess = incomingData => ({
  type: GET_INCOMING_DATA_SUCCESS,
  payload: incomingData
});

export const getIncomingDataError = error => ({
  type: GET_INCOMING_DATA_ERROR,
  payload: error
});

// export const setFilter = filteredNotes => ({
//   type: SET_FILTER,
//   payload: filteredNotes
// });
//
//
// export const setCharts = charts => ({
//   type: SET_CHARTS,
//   payload: charts
// });
//
// export const setPages = pages => ({
//   type: SET_PAGES,
//   payload: pages
// });
