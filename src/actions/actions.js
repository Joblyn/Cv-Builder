export const updateResumeData = (category, payload, actionType, id = null) => {
  const { type, name, value, dataset } = payload;
  return {
    type: actionType,
    category,
    payload : { type, name, value, dataset },
    id,
  };
};
