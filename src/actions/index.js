export const createNote = () => {
  const uniqueDate = new Date();
  const id = uniqueDate.valueOf();

  return {
    type: "NOTE_CREATED",
    payload: { id, text: "", tags: [] }
  };
};

export const editNote = (id, text) => {
  return {
    type: "NOTE_EDITED",
    payload: { id, text }
  };
};

export const createTag = tag => {
  return {
    type: "TAG_CREATED",
    payload: tag
  };
};
