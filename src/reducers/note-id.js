export default (state = "", action) => {
  switch (action.type) {
    case "INIT_APP": {
      return action.payload.id;
    }
    case "CREATE_NOTE": {
      return action.payload.id;
    }
    case "SELECT_NOTE": {
      return action.payload;
    }
    default:
      return state;
  }
};
