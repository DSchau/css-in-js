import React from 'react';
import {
  Heading,
  Fill,
  Image,
  Layout,
  Slide
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  titleSlide: require('assets/title-slide.jpg'),
  opiLogo: require('assets/images/object-partners.svg')
};

preloader(images);

export const Intro = () => (
  <Layout>
    <Fill style={{ paddingRight: 20 }}>
      <Heading size={1} caps fit textFont="Bitter">CSS in JS</Heading>
    </Fill>
    <Fill margin={10}>
      <Heading size={4} textColor="primary" textAlign="left">Benefits, Drawbacks, and Tools</Heading>
    </Fill>
  </Layout>
);

Intro.Props = {
  bgImage: images.titleSlide,
  bgDarken: 0.5
};

export const Sponsors = () => (
  <Slide>
    <Heading size={2} caps fit>Sponsors</Heading>
  </Slide>
);

export const ObjectPartners = () => (
  <Slide bgImage={images.opiMn} bgDarken={0.8}>
    <Image src={images.opiLogo} />
  </Slide>
);