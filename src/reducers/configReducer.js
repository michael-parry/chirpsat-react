import {
  UPDATE_CALLSIGN,
  UPDATE_RADIO,
  UPDATE_CHANNEL_START,
  UPDATE_CHANNEL_SPREAD,
  UPDATE_SATELLITES
} from "../actions/types";

import sats from "../json/sats";

const initialState = {
  callsign: "",
  channel: { start: "", spread: "" },
  radio: {},
  sats: sats,
  sat: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CALLSIGN:
      return { ...state, callsign: action.payload };
    case UPDATE_RADIO:
      return { ...state, radio: action.payload };
    case UPDATE_CHANNEL_START:
      return { ...state, channel: { ...state.channel, start: action.payload } };
    case UPDATE_CHANNEL_SPREAD:
      return {
        ...state,
        channel: { ...state.channel, spread: action.payload }
      };
    case UPDATE_SATELLITES:
      return {
        ...state,
        sats: action.payload
      };
    default:
      return state;
  }
}
