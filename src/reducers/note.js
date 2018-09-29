export default (state = {}, action) => {
  switch (action.type) {
    case "NOTE_CREATED": {
      const { tags } = action.payload;
      return { tags: tags.map(tag => tag), ...action.payload };
    }
    default:
      return { ...state };
  }
};
