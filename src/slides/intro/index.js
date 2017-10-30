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

preloader({
  titleSlide: images.titleSlide
});

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
        target="_blank"
        rel="noopener"
      >
        https://css-in-js.dustinschau.com
      </Link>
    </div>
  </div>;

Intro.Props = {
  bgImage: images.titleSlide,
  bgDarken: 0.5,
  notes: `
My name is Dustin Schau, and I'm going to hopefully teach you all about CSS in JS today. We'll start with some drawbacks of CSS that led to the creation of these libraries, then discuss advantages of CSS in JS over CSS, shift to discussion of some common patterns, utilities, and libraries to instrument CSS in JS, and then finally end with an illustration of the drawbacks of CSS in JS. Let's get started!
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
      <Heading size={2} caps fit textColor="white">
        Who?
      </Heading>
      {[
        {
          Icon: TwitterIcon,
          href: 'https://twitter.com/schaudustin',
          text: '@schaudustin'
        },
        {
          Icon: GithubIcon,
          href: 'https://github.com/dschau',
          text: 'dschau'
        },
        {
          Icon: WebsiteIcon,
          href: 'https://dustinschau.com',
          text: 'website'
        }
      ].map(({ Icon, href, text }) =>
        <Heading size={6} style={{ display: 'flex' }} key={text}>
          <Icon
            color="white"
            style={{ display: 'inline-block', marginRight: 8 }}
          />
          <Link href={href} textColor="white" target="_blank" rel="noopener">
            {text}
          </Link>
        </Heading>
      )}
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
  bgImage: images.nebraskaPerception,
  bgDarken: 0.4,
  notes: `
I'm a frontend developer speciailizing in all things JavaScript. Throughout my career, I've done a fair bit of everything: Angular, React, jQuery, you name it. Of course, I've also done a fair bit of everything in CSS land, whether it's vanilla CSS, LESS, SASS, CSS Modules, and (of course) the gamut of CSS in JS solutions. I'm from little ol' Omaha, Nebraska, which I think most people looks a bit like this.
  `
};

export const NebraskaActual = {
  Props: {
    bgImage: images.nebraskaActual,
    bgDarken: 0.2,
    notes: `
But... here's what Omaha actually looks like. It's been a great city for me to hone my craft, and I think it's a great technology city for professionals young and old.
    `
  }
};

export const Sponsors = () =>
  <Heading size={2} caps fit>
    Sponsors
  </Heading>;

Sponsors.Props = {
  notes: `
Every presentation has this prerequisite sponsors slide, but they truly deserve so much credit. Without their support, we wouldn't have all gotten together for this great conference, so it is _sincerely_ appreciated. Thank you so much!
  `
};

export const ObjectPartners = () =>
  <Image src={images.opiLogo} style={{ width: '100%' }} />;

ObjectPartners.Props = {
  bgImage: images.opiMn,
  bgDarken: 0.8,
  notes: `
I work at a great company called Object Partners. Specialize in JVM and frontend development of all sorts. Between Omaha, Minneapolis, and Chicago, we have about 100 consultants. Come talk to me after if you'd like to learn more--and I'll have some swag to give out to.
  `
};

export const FromHere = () =>
  <span>
    <WtfFace height={256} width={256} />
    <Heading size={2}>(you&hellip; possibly)</Heading>
  </span>;

FromHere.Props = {
  notes: `
I feel like some of you _may_ have a pretty negative perception of CSS in JS, or at least not an overtly positive perception. This can be for a variety of reasons, but I thik paramount in some people's minds is that it goes against the "separation of concerns" that have been ingrained in our minds and regularly re-enforced. It can feel weird, it can feel unclean, and it may even feel like a solution looking for a problem.
  `
};

export const ToHere = () =>
  <Layout>
    <Fill>
      <Ambivalence height={256} width={256} />
      <Heading size={2}>to here</Heading>
    </Fill>
    <Appear>
      <Fill>
        <HeartEyes height={256} width={256} />
        <Heading size={2}>or even here</Heading>
      </Fill>
    </Appear>
  </Layout>;

ToHere.Props = {
  notes: `
My goal is to take you from this initial possibly negative stance to an understanding of why CSS in JS exists, and how it can solve some some very real developmental problems.  I'm I'm successful, maybe even several of you will leave and want to use/experiment with some of these technologies 😍

## Agenda

- Discussion of the problems of CSS
- Defining what CSS in JS is, and how it can solve some of these problems
- Discussing some various CSS in JS libraries, any real world examples of usage of these
- Finishing up with some discussion of drawbacks of CSS in JS and some quick demos
  `
};
