import { ALERT_ON, ALERT_OFF } from '../constants/alertConstants';

export const alertMessage = (message) => (dispatch) => {
  const id = Date.now();
  dispatch({
    type: ALERT_ON,
    payload: { message, id },
  });
  setTimeout(() => dispatch({ type: ALERT_OFF, payload: id }), 5000);
};
