export default (state = [], action) => {
  const newState = state.map(note => {
    return { ...note, tags: note.tags.map(tag => tag) };
  });

  switch (action.type) {
    case "NOTE_CREATED": {
      const newNote = {
        ...action.payload,
        tags: action.payload.tags.map(tag => tag)
      };
      return [...newState, newNote];
    }
    default:
      return state;
  }
};
