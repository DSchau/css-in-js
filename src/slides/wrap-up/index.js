import React from 'react';
import { Heading, Link } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { Image } from 'components';

const images = {
  happy: `https://media.giphy.com/media/44b1ABtsG7VTy/giphy.gif`,
  cssPlayground: require('./assets/images/css-in-js-playground-optimized.png')
};

preloader(images);

export const WrapUpIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    Wrap Up
  </Heading>;

WrapUpIntro.Props = {
  bgColor: 'secondary',
  notes: `
- So what are we to make of all of this?
- CSS in JS solves real problems of CSS
- It does so in a very clean, and developer friendly way
- Performance may be a concern, as is the reliance on JS
  `
};

export const Happy = () => null;

Happy.Props = {
  bgImage: images.happy,
  notes: `
- Overall, I'm really happy with CSS in JS and what it's done for the ecosystem
- If I were to start a new project today, I'd author it using one of the CSS in JS libraries we've talked about, and I'd feel good about doing so
  `
};

export const CSSInJSPlayground = () =>
  <Link href="https://dschau.github.io/css-in-js-playground" target="_blank">
    <Image src={images.cssPlayground} />
  </Link>;

CSSInJSPlayground.Props = {
  bgColor: 'secondary',
  notes: `
- On that note, I recently finished a project using and demonstrating (you guessed it!) CSS in JS libraries
- Let's do a quick demo
  `
};
