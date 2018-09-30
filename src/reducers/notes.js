export default (state = {}, action) => {
  const newState = {};
  for (let id in state) {
    const note = state[id];
    newState[id] = { ...note, tags: { ...state.tags } };
  }

  switch (action.type) {
    case "NOTE_CREATED": {
      const { id, text, tags } = action.payload;
      const newNote = {
        text,
        tags
      };
      return { ...newState, [id]: newNote };
    }
    case "NOTE_EDITED": {
      const { id, text } = action.payload;
      const noteCopy = newState[id];
      return { ...newState, [id]: { ...noteCopy, text } };
    }
    case "TAG_ADDED": {
      const { id, tag } = action.payload;
      const noteCopy = newState[id];
      return {
        ...newState,
        [id]: { ...noteCopy, tags: { ...noteCopy.tags, [tag]: tag } }
      };
    }
    default:
      return state;
  }
};
