export default (state = [], action) => {
  const newState = state.map(note => {
    return { tags: note.tags.map(tag => tag), ...note };
  });

  switch (action.type) {
    case "NOTE_CREATED": {
      const newNote = {
        tags: action.payload.tags.map(tag => tag),
        ...action.payload
      };
      return [...newState, newNote];
    }
    default:
      return newState;
  }
};
