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
    case Actions.EDUCATION:
    case Actions.WORK_EXP:
    case Actions.CERTS:
    case Actions.ACHIEVEMENTS:
    case Actions.REFERENCES:
      if (action.payload.type === 'checkbox') {
        console.log(action.payload.type);
        return {
          ...state,
          [action.category]: [
            ...state[action.category].slice(0, action.id),
            {
              ...state[action.category][action.id],
              month: { 
                ...state[action.category][action.id].month, 
                end: action.payload.checked ? 'present' : '' 
              },
              year: { 
                ...state[action.category][action.id].year, 
                end: action.payload.checked ? 'present' : ''  
              }
            },
            ...state[action.category].slice(action.id + 1)
          ]
        }
      } else {
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
      }
    case Actions.LANGUAGES:
    case Actions.SKILLS:
      return {
        ...state,
        [action.category]: [
          ...state[action.category].slice(0, action.id),
          action.payload.value,
          ...state[action.category].slice(action.id + 1),
        ],
      };
    case Actions.ADD_ITEM:
      if (action.category === "languages" || "skills") {
        return {
          ...state,
          [action.category]: [...state[action.category], ""],
        };
      } else if (action.category === "certifications") {
        return {
          ...state,
          [action.category]: [
            ...state[action.category],
            { name: "", year: "" },
          ],
        };
      } else if (action.category === "achievements") {
        return {
          ...state,
          [action.category]: [...state[action.category], { achievement: "" }],
        };
      } else if (action.category === "references") {
        return {
          ...state,
          [action.category]: [...state[action.category], {}],
        };
      } else {
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
      return {
        ...state,
        [action.category]: [
          ...state[action.category].slice(0, action.id),
          ...state[action.category].slice(action.id + 1),
        ],
      };
    default:
      return state;
  }
}
