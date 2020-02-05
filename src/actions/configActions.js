import {
  UPDATE_CALLSIGN,
  UPDATE_RADIO,
  ACTIVATE_CALLSIGN,
  DEACTIVATE_CALLSIGN
} from "./types";

export const updateCallsign = value => dispatch => {
  dispatch({
    type: UPDATE_CALLSIGN,
    payload: value
  });
};
