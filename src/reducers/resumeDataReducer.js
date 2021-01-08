import * as Actions from "../constants/actionsTypes";
import { data } from "../initialstate";

export default function resumeDataReducer(state = data, action = {}) {
  switch (action.type) {
    case Actions.PERS_INFO:
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          [action.payload.name]: action.payload.value,
        },
      };
    case Actions.EDUCATION ||
      Actions.WORK_EXP ||
      Actions.CERTS ||
      Actions.ACHIEVEMENTS ||
      Actions.REFERENCES:
      if (action.payload.dataset.category) {
        return {
          ...state,
          [action.category]: [
            ...state[action.category].slice(0, action.id),
            {
              ...state[action.category][action.id],
              [action.payload.dataset.category]: {
                ...state[action.category][action.id][
                  action.payload.dataset.category
                ],
                [action.payload.name]: action.payload.value,
              },
            },
            ...state[action.category].slice(action.id + 1),
          ],
        };
      } else
        return {
          ...state,
          [action.category]: [
            ...state[action.category].slice(0, action.id),
            {
              ...state[action.category][action.id],
              [action.payload.name]: action.payload.value,
            },
            ...state[action.category].slice(action.id + 1),
          ],
        };
    case Actions.LANGUAGES || Actions.SKILLS:
      return {
        ...state,
        [action.category]: [
          ...state[action.category], 
          action.payload.value
        ],
      };
    case Actions.ADD_ITEM:
      if (action.category === "languages" || "skills") {
        return {
          ...state,
          [action.category]: [...state[action.category], ""],
        };
      } else{
        return {
          ...state,
          [action.category]: [
            ...state[action.category],
            {
              month: { start: "", end: "" },
              year: { start: "", end: "" },
            },
          ],
        };
      }
    case Actions.REMOVE_ITEM:
      let newState = { ...state };
      newState[action.category].splice(action.id, 1);
      return newState;
    default:
      return state;
  }
}
