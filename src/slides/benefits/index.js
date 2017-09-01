import React from 'react';
import { Appear, Heading, Layout, Fill, List, ListItem, S, Text } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { Image, QuoteSlide } from 'components';

const images = {
  logos: {
    atlassian: require('./assets/images/atlassian.svg'),
    bloomberg: require('./assets/images/bloomberg.svg'),
    microsoft: require('./assets/images/microsoft.svg'),
    paypal: require('./assets/images/paypal.svg'),
    reddit: require('./assets/images/reddit.svg'),
    target: require('./assets/images/target.svg')
  },
  lesh: require('./assets/images/ben-lesh-optimized.jpeg'),
  hardDrive: require('./assets/images/hard-drive-optimized.jpeg'),
  seperationOfConcerns: require('./assets/images/seperation-of-concerns-optimized.jpeg')
};

preloader(images);

export const LeshTweet = () => (
  <QuoteSlide
    quote={require('./assets/quotes/seperation-of-concerns.raw')}
    image={images.lesh}
    author="Ben Lesh"
    to="https://twitter.com/benlesh/status/812092408519413761"
  />
);

LeshTweet.Props = {
  bgImage: images.hardDrive,
  bgDarken: 0.75
};

export const SeperationOfConcerns = () => (
  <div>
    <Heading size={1} fit caps textFont="Bitter">Seperation of Concerns</Heading>
    <Heading size={1} caps textFont="Bitter" textColor="primary"><S type="italic">not</S></Heading>
    <Heading size={1} fit caps textFont="Bitter">Seperation of Technologies</Heading>
  </div>
);

SeperationOfConcerns.Props = {
  bgColor: 'secondary'
};

export const SeperationOfConcernsImage = () => (
  <Text textSize={18}>Cristiano Rastelli</Text>
);

SeperationOfConcernsImage.Props = {
  bgImage: images.seperationOfConcerns
};

/*
 * TODO: Fix this
 */
export const Companies = () => {
  const companies = Object.keys(images.logos);
  const split = Math.floor(companies.length / 2);
  const left = companies.splice(0, split);
  const right = companies.splice(0);
  const Loop = ({ items, style = {} }) =>
    <List>
      {items.map(company =>
        <ListItem key={company}>
          <Image src={images.logos[company]} style={style} />
        </ListItem>
      )}
    </List>;

  const style = {
    opacity: 0.8,
    filter: `brightness(0) invert(1)`
  };

  return (
    <Layout>
      <Fill>
        <Loop items={left} style={style} />
      </Fill>
      <Fill>
        <Loop items={right} style={style} />
      </Fill>
    </Layout>
  );
};

Companies.Props = {
  bgColor: 'secondary'
};
