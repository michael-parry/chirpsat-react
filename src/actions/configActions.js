import {
  UPDATE_CALLSIGN,
  UPDATE_RADIO,
  ACTIVATE_SATELLITE,
  DEACTIVATE_SATELLITE
} from "./types";
import radios from "../json/radios"; // replace with fetch from backend in updateRadio

export const updateCallsign = value => dispatch => {
  dispatch({
    type: UPDATE_CALLSIGN,
    payload: value
  });
};

export const updateRadio = value => dispatch => {
  const foundRadio = radios.find(radio => radio.id === parseInt(value));
  const radioPayload = foundRadio ? foundRadio : radios[0];
  dispatch({
    type: UPDATE_RADIO,
    payload: radioPayload
  });
};