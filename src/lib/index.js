function deepClone(original, clone = {}) {
  if (typeof original !== 'object') return original;

  for (let key in original) {
    clone[key] = deepClone(original[key], clone[key]);
  }
  return clone;
}

export default deepClone;

