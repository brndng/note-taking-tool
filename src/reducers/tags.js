export default (state = {}, action) => {
  switch (action.type) {
    case "APP_LOADED": {
      return action.payload.tags;
    }
    case "TAG_ADDED": {
      const { tag } = action.payload;
      return { ...state, [tag]: tag };
    }
    default:
      return state;
  }
};
