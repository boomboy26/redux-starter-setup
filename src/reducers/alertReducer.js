import { ALERT_ON, ALERT_OFF } from '../constants/alertConstants';

const initialState = [];

export default function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALERT_ON:
      return [...state, payload];
    case ALERT_OFF:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
