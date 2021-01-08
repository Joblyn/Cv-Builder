export const updateResumeData = (category, payload, type, id = null) => {
  return {
    type,
    category,
    payload,
    id,
  };
};
