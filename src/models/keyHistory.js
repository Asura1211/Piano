export default {
  state: {
    keyHistory: [],
  },
  reducers: {
    setKeyHistory(prevState, payload) {
      prevState.keyHistory = payload;
    },
  },
};
