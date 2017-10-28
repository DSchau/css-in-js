const context = require.context('./slides', true, /index\.js$/);

export default context.keys().reduce((notes, key) => {
  const file = context(key);
  notes[key] = file;
  return notes;
}, {});
