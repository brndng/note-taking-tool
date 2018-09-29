export default (state = "", action) => {
  switch (action.type) {
    case "TAG_CREATED": {
      return action.payload;
    }
  }
  return state;
};
