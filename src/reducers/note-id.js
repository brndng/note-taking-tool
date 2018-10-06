export default (state = "", action) => {
  switch (action.type) {
    case "APP_LOADED": {
      return action.payload.id;
    }
    case "NOTE_CREATED": {
      return action.payload.id;
    }
    case "NOTE_SELECTED": {
      return action.payload;
    }
    default:
      return state;
  }
};
