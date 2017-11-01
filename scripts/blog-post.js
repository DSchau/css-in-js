const path = require('path');
const fs = require('fs');

const base = path.resolve('screenshots');

const screenshots = fs.readdirSync(base);
const notes = require(path.resolve('notes.json'));

const post = screenshots.reduce((elements, shot) => {
  const title = shot.split('.').shift().split('-').slice(1).join('-');
  const note = notes[title] || '';
  elements = elements.concat([
    note,
    `![${title.replace(/-/, ' ')}](./images/screenshots/${shot})`
  ]);
  return elements;
}, [])
  .join('\n');

fs.writeFileSync(path.resolve('BLOG_POST.md'), post, 'utf8');
