export const updateResumeData = (category, payload, actionType, id = null) => {
  const subset = ({ type, name, value, dataset, checked }) => ({ type, name, value, dataset, checked });
  return {
    type: actionType,
    category,
    payload : payload ?  subset(payload) : payload,
    id,
  };
};
  