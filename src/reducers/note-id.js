export default (state = "", action) => {
  switch (action.type) {
    case "INIT_APP": {
      return action.payload.id;
    }
    case "CREATE_NOTE": {
      return action.payload.id;
    }
    case "SET_NOTE_ID": {
      return action.payload;
    }
    default:
      return state;
  }
};
