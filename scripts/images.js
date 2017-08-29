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
  size = 950,
}) => {
  const [name, extension] = file.split('/').pop().split('.');
  const image = sharp(file);

  return image.metadata()
    .then(metadata => {
      if (metadata.width > size) {
        console.log(`Updated ${file}`);
        return image[extension]({ quality }).toFile(file);
      }
      return metadata;
    })
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
