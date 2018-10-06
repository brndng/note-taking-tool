import deepClone from '../lib';

export default (state = {}, action) => {
  const newState = deepClone(state);

  switch (action.type) {
    case "APP_LOADED": {
      return action.payload.notes;
    }
    case "NOTE_CREATED": {
      const { id } = action.payload;
      return { ...newState, [id]: action.payload };
    }
    case "NOTE_EDITED": {
      const { id, text } = action.payload;
      const note = newState[id];
      return { ...newState, [id]: { ...note, text } };
    }
    case "TAG_ADDED": {
      const { id, tag } = action.payload;
      const note = newState[id];
      return {
        ...newState,
        [id]: { ...note, tags: { ...note.tags, [tag]: tag } }
      };
    }
    default:
      return state;
  }
};
