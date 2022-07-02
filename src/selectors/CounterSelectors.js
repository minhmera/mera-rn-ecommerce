export const getCounter = (state) => {
  return Object.keys(state.counter).length > 0 ? state.counter : 0;
};
