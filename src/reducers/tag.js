export default (state = "", action) => {
  switch (action.type) {
    case "APP_LOADED": {
      return action.payload.tag;
    }
    case "TAG_SELECTED": {
      return action.payload;
    }
    default:
      return state;
  }
};
