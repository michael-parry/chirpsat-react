import {
  UPDATE_CALLSIGN,
  UPDATE_RADIO,
  UPDATE_SATELLITES,
  UPDATE_CONTACT,
  UPDATE_CHANNEL_START,
  UPDATE_CHANNEL_SPREAD,
  UPDATE_POWER
} from "../actions/types";

import sats from "../json/sats";

const initialState = {
  callsign: "",
  radio: {},
  sats: sats,
  contact: "Satellites", // also set in ConfigActions.js
  channel: { start: "", spread: "" },
  power: "Choose.."
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CALLSIGN:
      return { ...state, callsign: action.payload };
    case UPDATE_RADIO:
      return { ...state, radio: action.payload, power: initialState.power };
    case UPDATE_SATELLITES:
      return {
        ...state,
        sats: action.payload
      };
    case UPDATE_CONTACT:
      return { ...state, contact: action.payload };
    case UPDATE_CHANNEL_START:
      return { ...state, channel: { ...state.channel, start: action.payload } };
    case UPDATE_CHANNEL_SPREAD:
      return {
        ...state,
        channel: { ...state.channel, spread: action.payload }
      };

    case UPDATE_POWER:
      return {
        ...state,
        power: action.payload
      };
    default:
      return state;
  }
}
