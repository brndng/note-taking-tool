export default (state = "", action) => {
  switch (action.type) {
    case "NOTE_CREATED": {
      return action.payload.id;
    }
    default:
      return state;
  }
};
