export const createNote = note => {
  return {
    type: "NOTE_CREATED",
    payload: note
  };
};

export const createTag = tag => {
  return {
    type: "TAG_CREATED",
    payload: tag
  };
};
