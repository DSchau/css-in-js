import React from 'react';
import { Heading, Link } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { Image } from 'components';

const images = {
  conflicted: `https://media.giphy.com/media/v0eHX3n28wvoQ/giphy.gif`,
  cssPlayground: require('./assets/images/css-in-js-playground-optimized.png')
};

preloader(images);

export const WrapUpIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    Wrap Up
  </Heading>;

WrapUpIntro.Props = {
  bgColor: 'secondary'
};

export const Conflicted = () => null;

Conflicted.Props = {
  bgImage: images.conflicted
};

export const CSSInJSPlayground = () =>
  <Link href="https://dschau.github.io/css-in-js-playground" target="_blank">
    <Image src={images.cssPlayground} />
  </Link>;

CSSInJSPlayground.Props = {
  bgColor: 'secondary'
};
