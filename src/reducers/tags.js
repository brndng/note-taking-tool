export default (state = [], action) => {
  const newState = state.map(tag => tag);

  switch (action.type) {
    case "TAG_CREATED": {
      return [...newState, action.payload];
    }
  }
  return newState;
};
