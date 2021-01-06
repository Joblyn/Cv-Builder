import * as Actions from '../constants/actions';
import { data } from "../initialstate";

export default function resumeDataReducer(state = data, action={}) {
  switch(action.type) {
    case Actions.UPDATE: 
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          [action.payload.name]: action.payload.value
        }
      }
    default:
      return state;
  }
};