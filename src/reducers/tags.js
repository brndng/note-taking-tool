export default (state = {}, action) => {
  switch (action.type) {
    case "TAG_ADDED": {
      const { tag } = action.payload;
      return { ...state, [tag]: tag };
    }
    default:
      return state;
  }
};
