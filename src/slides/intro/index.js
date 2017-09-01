import React from 'react';
import { Appear, Heading, Fill, Layout, Link } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import WtfFace from 'emojione/assets/svg/1f616.svg';
import Ambivalence from 'emojione/assets/svg/1f612.svg';
import HeartEyes from 'emojione/assets/svg/1f60d.svg';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

import { Image } from 'components';

const images = {
  titleSlide: require('./assets/images/title-slide-optimized.jpeg'),
  opiLogo: require('./assets/images/object-partners.svg'),
  opiMn: require('./assets/images/opi-mn-optimized.jpeg'),
  me: require('./assets/images/me-optimized.jpeg'),
  okc: require('./assets/images/okc-optimized.jpeg'),
  thunderPlains: require('./assets/images/thunder-plains-optimized.png'),
  nebraskaActual: require('./assets/images/nebraska-actual-optimized.jpeg'),
  nebraskaPerception: require('./assets/images/nebraska-perception-optimized.jpeg')
};

preloader(images);

export const Intro = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }}
  >
    <Layout>
      <Fill
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: 20
        }}
      >
        <Heading size={1} caps fit textFont="Bitter">
          CSS in JS
        </Heading>
      </Fill>
      <Fill margin={10}>
        <Heading size={4} textColor="primary" textAlign="left">
          Benefits, Drawbacks, and Tools
        </Heading>
      </Fill>
    </Layout>
  </div>;

Intro.Props = {
  bgImage: images.titleSlide,
  bgDarken: 0.5,
  notes: `
# Sup

- 1234
- 456

## Another sup
  `
};

/* TODO: Add back for Thunderplains
export const Sponsors = () => (
  <Heading size={2} caps fit>Sponsors</Heading>
);
*/
export const AboutMe = () =>
  <Layout>
    <Fill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingRight: 20
      }}
    >
      <Heading size={2} caps fit>
        Who?
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <TwitterIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://twitter.com/schaudustin" textColor="white">
          schaudustin
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <GithubIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://github.com/dschau" textColor="white">
          dschau
        </Link>
      </Heading>
    </Fill>
    <Fill
      style={{
        maxWidth: '40%'
      }}
    >
      <Image src={images.me} style={{ borderRadius: 400 }} />
    </Fill>
  </Layout>;

export const ObjectPartners = () =>
  <Image src={images.opiLogo} style={{ width: '100%' }} />;

ObjectPartners.Props = {
  bgImage: images.opiMn,
  bgDarken: 0.8
};

export const ThunderPlains = () => (
  <Image src={images.thunderPlains} />
);

ThunderPlains.Props = {
  bgImage: images.okc,
  bgDarken: 0.6
}

/*
 * TODO: Add back for Thunderplains
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
*/

export const FromHere = () => <WtfFace height={256} width={256} />;

export const ToHere = () =>
  <Layout>
    <Fill>
      <Ambivalence height={256} width={256} />
    </Fill>
    <Appear>
      <Fill>
        <HeartEyes height={256} width={256} />
      </Fill>
    </Appear>
  </Layout>;
