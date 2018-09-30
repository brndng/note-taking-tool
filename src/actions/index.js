export const createNote = () => {
  const uniqueDate = new Date();
  const id = uniqueDate.valueOf();

  return {
    type: "NOTE_CREATED",
    payload: { id, text: "", tags: {} }
  };
};

export const editNote = (id, text) => {
  return {
    type: "NOTE_EDITED",
    payload: { id, text }
  };
};

export const addTag = (id, tag) => {
  return {
    type: "TAG_ADDED",
    payload: { id, tag }
  };
};

export const selectTag = tag => {
  return {
    type: "TAG_SELECTED",
    payload: tag
  };
};

export const selectNote = id => {
  return {
    type: "NOTE_SELECTED",
    payload: id
  };
};
