import React from 'react';
import {
  Heading,
  Fill,
  Image,
  Layout,
  Link
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

const images = {
  titleSlide: require('assets/images/title-slide.jpg'),
  opiLogo: require('assets/images/object-partners.svg'),
  opiMn: require('assets/images/opi-mn.jpg'),
  me: require('assets/images/me.jpg'),
  nebraskaActual: require('assets/images/nebraska-actual.jpg'),
  nebraskaPerception: require('assets/images/nebraska-perception.jpg'),
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
  <Heading size={2} caps fit>Sponsors</Heading>
);

export const ObjectPartners = () => (
  <Image src={images.opiLogo} />
);

ObjectPartners.Props = {
  bgImage: images.opiMn,
  bgDarken: 0.8
};

export const AboutMe = () => (
  <Layout>
    <Fill style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      paddingRight: 20
    }}>
      <Heading size={2} caps fit>Who?</Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <TwitterIcon color="white" style={{ display: 'inline-block' }} />
        <Link href="https://twitter.com/schaudustin" textColor="white">schaudustin</Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <GithubIcon color="white" style={{ display: 'inline-block' }} />
        <Link href="https://github.com/dschau" textColor="white">dschau</Link>
      </Heading>
    </Fill>
    <Fill style={{
      maxWidth: '40%'
    }}>
      <Image src={images.me} style={{ borderRadius: 400 }} />
    </Fill>
  </Layout>
);

export const NebraskaPerception = {
  Props: {
    bgImage: images.nebraskaPerception,
    bgDarken: 0.2
  }
};

export const NebraskaActual = {
  Props: {
    bgImage: images.nebraskaActual,
    bgDarken: 0.2
  }
};
