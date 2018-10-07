export default (state = "", action) => {
  switch (action.type) {
    case "INIT_APP": {
      return action.payload.tag;
    }
    case "SELECT_TAG": {
      return action.payload;
    }
    default:
      return state;
  }
};
