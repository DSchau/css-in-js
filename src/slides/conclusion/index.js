import React from 'react';
import {
  Heading
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif'
};

preloader(images);

export const ThankYou = () => null;

ThankYou.Props = {
  bgImage: images.thankYou
}
