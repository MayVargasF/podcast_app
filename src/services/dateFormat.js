export const dateFormat = (date) => {
  const clearDate = new Date(date);
  return `${clearDate.getDate()}/${clearDate.getMonth()}/${clearDate.getFullYear()}`;
};
