export const createNote = note => {
  const uniqueDate = new Date();
  const id = uniqueDate.valueOf();

  return {
    type: "NOTE_CREATED",
    payload: { text: "", tags: [], id }
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
