export function deepClone(original, clone = {}) {
  if (typeof original !== 'object') return original;
  for (let key in original) {
    clone[key] = deepClone(original[key], clone[key]);
  }
  return clone;
}

export function getAllTags(notes) {
  const tags = {};
  for (let id in notes) {
    for (let tag in notes[id].tags) {
      tags[tag] = tag;
    }
  }
  return Object.values(tags);
}

export function getTagsById(notes, id) {
  return notes[id] ? Object.values(notes[id].tags) : [];
}

export function getTaggedNotes(notes, tag) {
  return Object.values(notes).filter(note => {
    return note.isActive && (!tag || note.tags[tag]);
  }).reverse();
}

export function getInactiveNotes(notes) {
  return Object.values(notes).filter(note => {
    return !note.isActive;
  }).reverse();
}
