import * as Actions from '../constants/actions';
export const updateResumeData = (category, payload) => {
  return {
    type: Actions.UPDATE,
    category,
    payload
  }
}