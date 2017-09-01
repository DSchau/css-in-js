import React from 'react';
import { Appear, Heading, Layout, Fill, List, ListItem } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { Image } from 'components';

const images = {
  logos: {
    atlassian: require('./assets/images/atlassian.svg'),
    bloomberg: require('./assets/images/bloomberg.svg'),
    microsoft: require('./assets/images/microsoft.svg'),
    paypal: require('./assets/images/paypal.svg'),
    reddit: require('./assets/images/reddit.svg'),
    target: require('./assets/images/target.svg')
  }
};

preloader(images);

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
