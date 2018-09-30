export default (state = {}, action) => {
  // const newState = state.map(note => {
  //   return { ...note, tags: note.tags.map(tag => tag) };
  // });
  const newState = {};
  for (let id in state) {
    const note = state[id];
    newState[id] = { ...note, tags: note.tags.map(tag => tag) };
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
    default:
      return state;
  }
};
