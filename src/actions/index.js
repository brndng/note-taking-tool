export const createNote = note => {
  return {
    type: "NOTE_CREATED",
    payload: note
  };
};

export const editNote = text => {
  return {
    type: "NOTE_EDITED",
    payload: text
  };
};

export const createTag = tag => {
  return {
    type: "TAG_CREATED",
    payload: tag
  };
};
