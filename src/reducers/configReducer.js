import {
  UPDATE_CALLSIGN,
  UPDATE_RADIO,
  ACTIVATE_SATELLITE,
  DEACTIVATE_SATELLITE
} from "../actions/types";

const initialState = {
  callsign: "",
  radio: {},
  sats: [],
  sat: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CALLSIGN:
      return { ...state, callsign: action.payload };
    case UPDATE_RADIO:
      return { ...state, radio: action.payload };
    default:
      return state;
  }
}
