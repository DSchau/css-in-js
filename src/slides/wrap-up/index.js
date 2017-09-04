import React from 'react';
import { Heading } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  conflicted: `https://media.giphy.com/media/v0eHX3n28wvoQ/giphy.gif`
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
