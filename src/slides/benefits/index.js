import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Layout,
  Fill,
  List,
  ListItem,
  S,
  Text
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { Image, QuoteSlide } from 'components';
import { CODE_BACKGROUND } from 'style';

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

const snippets = {
  semanticElements: require('./assets/snippets/semantic-elements.js'),
  classNameElements: require('./assets/snippets/class-name-elements.js')
};

preloader(images);

export const BenefitsIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    OK&hellip; what then?
  </Heading>;

BenefitsIntro.Props = {
  bgColor: 'secondary'
};

export const NonSemanticElement = () =>
  <CodePane lang="jsx" source={snippets.classNameElements} textSize={16} />;

NonSemanticElement.Props = {
  bgColor: CODE_BACKGROUND
};

export const SemanticComparison = () =>
  <CodePane lang="jsx" source={snippets.semanticElements} textSize={16} />;

SemanticComparison.Props = {
  bgColor: CODE_BACKGROUND
};

export const StyleCognitiveLoad = () => {
  const centered = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const arrow = '↓';
  const VerticalHeading = ({ items }) => {
    const len = items.length;
    return (
      <div>
        {items
          .reduce((arr, el, index) => {
            arr = arr.concat(el).concat(index + 1 < len ? [arrow] : []);
            return arr;
          }, [])
          .map((text, index) =>
            <Heading
              textColor="secondary"
              size={text === arrow ? 6 : 4}
              key={index}
            >
              {text}
            </Heading>
          )}
      </div>
    );
  };

  return (
    <Layout>
      <Fill style={centered}>
        <VerticalHeading
          items={['HTML', 'Class names', 'Cascading rules', 'Styles']}
        />
      </Fill>
      <Fill style={centered}>
        <VerticalHeading items={['HTML', 'Styles']} />
      </Fill>
    </Layout>
  );
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
