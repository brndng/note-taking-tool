export const loadInitialState = () => {
  //TODO: replace test data
  return {
    type: "INIT_APP",
    payload: {
      id: 1,
      notes: {
        1: { id: 1, text: 'thoughts about bears1', tags: { bear: 'bear' }, isActive: true },
        2: { id: 2, text: 'bear dreams2', tags: { bear: 'bear' }, isActive: true },
        3: { id: 3, text: 'cats!', tags: { cat: 'cat' }, isActive: true },
        4: { id: 4, text: 'dog notes', tags: { dog: 'dog' }, isActive: true },
        5: { id: 5, text: 'bears3', tags: { bear: 'bear' }, isActive: true },
        6: { id: 6, text: 'bears4', tags: { bear: 'bear' }, isActive: true },
        7: { id: 7, text: 'second cats!', tags: { cat: 'cat' }, isActive: true },
        8: { id: 8, text: 'most recent cats!', tags: { cat: 'cat' }, isActive: true },
      },
      tag: 'bear',
    }
  };
}

export const createNote = (currentTag) => {
  const uniqueDate = new Date();
  const id = uniqueDate.valueOf();
  const tags = currentTag ? { [currentTag]: currentTag } : {}

  return {
    type: "CREATE_NOTE",
    payload: { id, text: "", tags, isActive: true }
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

export const selectTag = tag => {
  return {
    type: "SELECT_TAG",
    payload: tag
  };
};

export const selectNote = id => {
  return {
    type: "SELECT_NOTE",
    payload: id
  };
};

export const markForTrash = (id) => {
  return {
    type: "TRASH_NOTE",
    payload: id
  };
}

export const clearTrash = (...args) => {
  console.log('args', args)
  return {
    type: "CLEAR_TRASH",
    payload: args
  };
}
