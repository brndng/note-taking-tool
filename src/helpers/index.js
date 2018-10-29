export function deepClone(original, clone = {}) {
  if (typeof original !== "object") return original;
  for (let key in original) {
    clone[key] = deepClone(original[key], clone[key]);
  }
  return clone;
}

export function getAllNotes(notes) {
  return Object.values(notes).reverse();
}

export function getAllTags(notes) {
  const tags = {};
  for (let id in notes) {
    for (let tag in notes[id].tags) {
      if (!notes[id].tags.trash) tags[tag] = tag;
    }
  }
  return Object.values(tags);
}

export function getTagsById(notes, id) {
  return notes[id] ? Object.values(notes[id].tags) : [];
}

export function getNotesByTag(notes, tag) {
  return Object.values(notes)
    .filter(note => {
      return (
        (!tag && !note.tags.trash) ||
        (tag === "trash" && note.tags.trash) ||
        (tag !== "trash" && !note.tags.trash && note.tags[tag])
      );
    })
    .reverse();
}

export function getNextNote(id, notes, tag) {
  const taggedNotes = getNotesByTag(notes, tag);
  if (!taggedNotes.length) return null;

  for (let note of taggedNotes) {
    if (note.id !== id) return note;
  }
}

export function getNextId(id, notes, tag) {
  const nextNote = getNextNote(id, notes, tag);
  return nextNote ? nextNote.id : null;
}

export function isOnlyNoteByTag(notes, id, tag) {
  const taggedNotes = getNotesByTag(notes, tag);
  return taggedNotes.length < 2;
}

export function isTrash(tag) {
  return tag === "trash";
}

export function isDisabled(notes, tag) {
  return !getNotesByTag(notes, tag).length;
}

export function getNoteText(notes, id) {
  if (!id) return "";
  return notes[id].text;
}

export function getMostRecentId(notes, tag) {
  const taggedNotes = getNotesByTag(notes, tag);
  return taggedNotes.length ? taggedNotes[0].id : null;
}

export function debounce(fn, delay) {
  let timer = null;

  return function() {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, [...arguments]);
    }, delay);
  };
}
