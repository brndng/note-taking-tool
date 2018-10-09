export const loadInitialState = () => {
  //TODO: replace test data
  return {
    type: "INIT_APP",
    payload: {
      id: 8,
      notes: {
        1: { id: 1, text: "thoughts about bears1", tags: { bear: "bear" } },
        2: { id: 2, text: "bear dreams2", tags: { bear: "bear" } },
        3: { id: 3, text: "cats!", tags: { cat: "cat" } },
        4: { id: 4, text: "dog notes", tags: { dog: "dog" } },
        5: { id: 5, text: "bears3", tags: { bear: "bear" } },
        6: { id: 6, text: "bears4", tags: { bear: "bear" } },
        7: { id: 7, text: "second cats!", tags: { cat: "cat" } },
        8: { id: 8, text: "most recent cats!", tags: { cat: "cat" } }
      },
      tag: null
    }
  };
};

export const createNote = currentTag => {
  const uniqueDate = new Date();
  const id = uniqueDate.valueOf();
  const tags = currentTag ? { [currentTag]: currentTag } : {};

  return {
    type: "CREATE_NOTE",
    payload: { id, text: "", tags }
  };
};

export const editNote = (id, text) => {
  return {
    type: "EDIT_NOTE",
    payload: { id, text }
  };
};

export const addTag = (id, tag) => {
  return {
    type: "ADD_TAG",
    payload: { id, tag }
  };
};

export const deleteTag = (id, tag) => {
  return {
    type: "DELETE_TAG",
    payload: { id, tag }
  };
};

export const setTag = tag => {
  return {
    type: "SET_TAG",
    payload: tag
  };
};

export const setNoteId = id => {
  return {
    type: "SET_NOTE_ID",
    payload: id
  };
};

export const trashNote = id => {
  return {
    type: "TRASH_NOTE",
    payload: id
  };
};

export const restoreNote = id => {
  return {
    type: "RESTORE_NOTE",
    payload: id
  };
};

export const deleteNote = id => {
  return {
    type: "DELETE_NOTE",
    payload: id
  };
};

export const clearTrash = (...args) => {
  console.log("args", args);
  return {
    type: "CLEAR_TRASH",
    payload: args
  };
};
