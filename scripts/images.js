const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const getFiles = src => {
  return new Promise((resolve, reject) => {
    glob(path.join(src, '**/*.{jpg,jpeg,gif,png}'), (err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  });
};

const writeFile = ({
  file,
  quality = 65,
  size = 900,
}) => {
  const [name, extension] = file.split('/').pop().split('.');
  let stream = sharp(file).resize(size);

  console.log(name, extension);

  // return stream[extension]({ quality }).toFile(file);
};

getFiles(path.resolve('src'))
  .then(files => {
    return Promise.all(
      files
        .map(file => writeFile({
          file
        }))
    )
  });
