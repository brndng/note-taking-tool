export const loadInitialState = () => {
  //TODO: replace test data
  return {
    type: "APP_LOADED",
    payload: {
      id: 1,
      notes: {
        1: { id: 1, text: 'thoughts about bears1', tags: { bear: 'bear' } },
        2: { id: 2, text: 'bear dreams2', tags: { bear: 'bear' } },
        3: { id: 3, text: 'cats!', tags: { cat: 'cat' } },
        4: { id: 4, text: 'dog notes', tags: { dog: 'dog' } },
        5: { id: 5, text: 'bears3', tags: { bear: 'bear' } },
        6: { id: 6, text: 'bears4', tags: { bear: 'bear' } },
        7: { id: 7, text: 'second cats!', tags: { cat: 'cat' } },
        8: { id: 8, text: 'most recent cats!', tags: { cat: 'cat' } },
      },
      tag: 'bear',
      tags: {
        bear: 'bear',
        cat: 'cat',
        dog: 'dog'
      }
    }
  };
}

export const createNote = (currentTag) => {
  const uniqueDate = new Date();
  const id = uniqueDate.valueOf();
  const tags = currentTag ? { [currentTag]: currentTag } : {}

  return {
    type: "NOTE_CREATED",
    payload: { id, text: "", tags }
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
