export default (state = {}, action) => {
  switch (action.type) {
    case "NOTE_CREATED": {
      const { tags } = action.payload;
      return { ...action.payload, tags: tags.map(tag => tag) };
    }
    case "NOTE_EDITED": {
      return {
        ...state,
        text: action.payload,
        tags: state.tags.map(tag => tag)
      };
    }
    default:
      return state;
  }
};
