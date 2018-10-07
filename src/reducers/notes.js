import { deepClone } from '../helpers';

export default (state = {}, action) => {
  const newState = deepClone(state);
  switch (action.type) {
    case "INIT_APP": {
      return action.payload.notes;
    }
    case "CREATE_NOTE": {
      const { id } = action.payload;
      return { ...newState, [id]: action.payload };
    }
    case "EDIT_NOTE": {
      const { id, text } = action.payload;
      const note = newState[id];
      return { ...newState, [id]: { ...note, text } };
    }
    case "ADD_TAG": {
      const { id, tag } = action.payload;
      newState[id].tags[tag] = tag;
      return newState;
    }
    case "DELETE_TAG": {
      const { id, tag } = action.payload;
      const { tags } = newState[id];
      delete tags[tag]
      return newState;
    }

    case "TRASH_NOTE": {
      const id = action.payload;
      newState[id].isActive = false;
      return newState;
    }
    default:
      return newState;
  }
};
