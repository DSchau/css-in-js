import React from 'react';
import { Appear, Heading, Fill, Layout, Link } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import WtfFace from 'emojione/assets/svg/1f616.svg';
import Ambivalence from 'emojione/assets/svg/1f612.svg';
import HeartEyes from 'emojione/assets/svg/1f60d.svg';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import { Image } from 'components';

const images = {
  titleSlide: require('./assets/images/title-slide-optimized.jpeg'),
  nebraskaJs: require('./assets/images/nebraskajs.svg'),
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
      justifyContent: 'center',
      minHeight: '85vh'
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      }}
    >
      <Link
        href="http://2017.thunderplainsconf.com"
        target="_blank"
        rel="noopener"
      >
        <Image src={images.thunderPlains} style={{ maxHeight: 50 }} />
      </Link>
    </div>
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
          Benefits, Drawbacks, and Tooling
        </Heading>
      </Fill>
    </Layout>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Link
        href="https://css-in-js.dustinschau.com"
        textColor="rgba(255, 255, 255, 0.7)"
      >
        https://css-in-js.dustinschau.com
      </Link>
    </div>
  </div>;

Intro.Props = {
  bgImage: images.titleSlide,
  bgDarken: 0.5,
  notes: `
My name is Dustin Schau, and I'm going to hopefully teach you all about CSS in JS today. We'll start with some drawbacks of CSS that led to the creation of these libraries, then discuss advantages of CSS in JS over CSS, shift to discussion of some common patterns, utilities, and libraries to instrument CSS in JS, and then finally end with a (hopefully fair!) illustration of the drawbacks of CSS in JS. Let's get started!
  `
};

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
      <Heading size={6} style={{ display: 'flex' }}>
        <WebsiteIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://dustinschau.com" textColor="white">
          website
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

AboutMe.Props = {
  notes: `
- Frontend developer specializing in all things JavaScript
- Done a bit of everything, whether that's jQuery, Angular, React, you name it
- I've also done a fair bit of everything in CSS land, whether it's vanilla CSS, LESS, SASS, CSS Modules, and (of course) the gamut of CSS in JS solutions
  `
};

export const Sponsors = () =>
  <Heading size={2} caps fit>
    Sponsors
  </Heading>;

export const ObjectPartners = () =>
  <Image src={images.opiLogo} style={{ width: '100%' }} />;

ObjectPartners.Props = {
  bgImage: images.opiMn,
  bgDarken: 0.8,
  notes: `
- I work at a great company called Object Partners
- Specialize in JVM and frontend development of all sorts
- About 100 consultants between here, MN, and Chicago
- Come talk to me after if you'd like to learn more (and I'll have some swag to give out too)
  `
};

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

export const FromHere = () => <WtfFace height={256} width={256} />;

FromHere.Props = {
  notes: `
- Many of you probably have a pretty negative perception of CSS in JS
- It goes against the "separation of concerns" that has been ingrained and regularly re-enforced
- It feels weird, feels unclean, and feels like it's a solution looking for a problem
  `
};

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

ToHere.Props = {
  notes: `
- My goal is to take you from that initial perception/feeling to at least understanding/slightly skeptical of the practice
- If I'm successful, maybe even a few of you will leave and want to use/experiment with some of these technologies

## Agenda

- Discussion of the problems of CSS
- Defining what CSS in JS is, and how it can solve some of these problems
- Discussing some various CSS in JS libraries, any real world examples of usage of these
- Finishing up with some discussion of drawbacks of CSS in JS and some quick demos
  `
};
