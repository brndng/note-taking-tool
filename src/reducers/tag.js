export default (state = "", action) => {
  switch (action.type) {
    case "INIT_APP": {
      return action.payload.tag;
    }
    case "SET_TAG": {
      return action.payload;
    }
    default:
      return state;
  }
};
