const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const kebab = require('lodash.kebabcase');

const filterFiles = basePath => fileOrFolder => fs.statSync(path.join(basePath, fileOrFolder)).isDirectory();

const base = path.resolve('src/slides');

const getNotes = ast => {
  let notes = {};
  traverse(ast, {
    enter(path) {
      if (!path.node || !path.node.left || !path.node.right) {
        return;
      }
      if (path.node.left.type === 'MemberExpression' && path.node.right.type === 'ObjectExpression') {
        const { name } = path.node.left.object;
        path.node.right.properties
          .forEach(property => {
            const { key, value } = property;
            if (key.name === 'notes') {
              notes[kebab(name)] = value.quasis[0].value.raw;
            }
          });
      }
    }
  });

  return notes;
};

const notes = fs.readdirSync(base)
  .filter(filterFiles(base))
  .map(folder => fs.readFileSync(path.join(base, folder, 'index.js'), 'utf8'))
  .reduce((collection, code) => {
    const ast = babylon.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'objectRestSpread', 'classProperties', 'asyncGenerators']
    });

    return {
      ...collection,
      ...getNotes(ast)
    };
  }, {});

fs.writeFileSync(path.resolve('notes.json'), JSON.stringify(notes, null, 2), 'utf8');
