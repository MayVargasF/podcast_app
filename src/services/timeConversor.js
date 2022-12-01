export const timeConversor = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor(((ms % 3600000) % 60000) / 1000);
  const result = hours !== 0 ? [hours, mins, secs] : [mins, secs];

  return result.join(":");
};
