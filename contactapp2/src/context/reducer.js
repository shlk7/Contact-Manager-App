//TODO: create contact using all actions

import {
  SET_CONTACT,
  SET_LOADING,
  SET_SINGLE_CONTACT,
} from "./action.types";

//TODO: use switch case
export default (state, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return action.payload == null
        ? { ...state, contacts: [] }
        : { ...state, contacts: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_SINGLE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    default:
      return state;
  }
};
