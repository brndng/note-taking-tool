export default (state = "", action) => {
  switch (action.type) {
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
