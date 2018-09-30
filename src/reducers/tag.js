export default (state = "", action) => {
  switch (action.type) {
    // case "TAG_ADDED": {
    //   return action.payload.tag;
    // }
    case "TAG_SELECTED": {
      return action.payload;
    }
    default:
      return state;
  }
};
