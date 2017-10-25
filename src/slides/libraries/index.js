import React from 'react';
import {
  Code,
  CodePane,
  Fill,
  Heading,
  Layout,
  List,
  ListItem,
  S,
  Text
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import PolishedEmoji from 'emojione/assets/svg/2728.svg';

import { GithubStars, Image, LibraryPayload, NpmDownloads } from 'components';

import { CODE_BACKGROUND } from 'style';

const libraries = {
  styledComponents: require('./assets/images/styled-components.png'),
  glamorous: require('./assets/images/glamorous.svg'),
  emotion: require('./assets/images/emotion.png')
};

const logos = {
  atlassian: require('./assets/images/atlassian.svg'),
  bloomberg: require('./assets/images/bloomberg.svg'),
  microsoft: require('./assets/images/microsoft.svg'),
  paypal: require('./assets/images/paypal.svg'),
  reddit: require('./assets/images/reddit.svg'),
  target: require('./assets/images/target.svg')
};

const images = {
  mostlyReact:
    'https://thumbs.gfycat.com/RegalFlickeringAmphibian-size_restricted.gif',
  ...libraries,
  ...logos
};

const snippets = {
  styledComponents: require('./assets/snippets/styled-components.js'),
  glamorous: require('./assets/snippets/glamorous.js'),
  emotion: require('./assets/snippets/emotion.js'),
  polished: require('./assets/snippets/polished.js')
};

preloader(images);

export const LibrariesIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    Libraries
  </Heading>;

LibrariesIntro.Props = {
  bgColor: 'secondary',
  notes: `
- Now that we've talked about all this CSS in JS for quite some time, let's talk about some libraries to instrument this practice
  `
};

export const Caveat = () =>
  <div>
    <Heading size={2} fit caps textColor="white">
      Not <S type="italic">all</S> React
    </Heading>
    <Heading size={6} caps textColor="white">
      &hellip; but Mostly
    </Heading>
  </div>;

Caveat.Props = {
  bgImage: images.mostlyReact,
  bgDarken: 0.25,
  notes: `
- Most of these are tied to React
- However, some of them (or the underlying dependencies that power them) are library/framework-agnostic
- So while you may have the tendency to gloss over the ones that are all React, try to resist, because you may still be able to use techniques or practices from that ecosystem
  `
};

export const StyledComponents = () =>
  <div>
    <Image src={libraries.styledComponents} />
  </div>;

StyledComponents.Props = {
  bgColor: `rgb(219,112,147)`,
  notes: `
- The gateway drug to CSS in JS libraries
- You use tagged template literals, which basically means you call a function with all arguments specified as an array
- You can pretty much copy and paste CSS (even nesting, although it's not recommended!) from an existing CSS architecture
  `
};

export const StyledComponentsExample = () =>
  <CodePane lang="jsx" source={snippets.styledComponents} textSize={20} />;

StyledComponentsExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Glamorous = () =>
  <div>
    <Image src={libraries.glamorous} style={{ maxWidth: '75%' }} />
  </div>;

Glamorous.Props = {
  bgColor: '#FFF2F2',
  notes: `
- Glamorous built on some of the ideas, particularly the exporting of "tags" to remove the need for wrapping elements
- However, the major difference is that it expects style objects, rather than style strings
- Another difference is the general API of injecting props/calling functions, etc.
  `
};

export const GlamorousExample = () =>
  <CodePane lang="jsx" source={snippets.glamorous} textSize={20} />;

GlamorousExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Emotion = () =>
  <div>
    <Heading size={4} textTransform="lowercase">
      emotion
    </Heading>
    <Image src={libraries.emotion} style={{ maxWidth: '25%' }} />
  </div>;

Emotion.Props = {
  bgColor: 'rgb(248, 249, 250)',
  notes: `
- Leverages ideas from both Glamorous and styled-components
- Can write styles as string or as a style object
- Has a really interesting babel plugin that compiles away the compiler at build time (think Angular AOT compilation for CSS in JS)
  `
};

export const EmotionExample = () =>
  <CodePane lang="jsx" source={snippets.emotion} textSize={20} />;

EmotionExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Polished = () =>
  <div>
    <Heading size={4} textColor="white" textTransform="lowercase">
      polished
    </Heading>
    <PolishedEmoji height={192} width={192} style={{ marginTop: 40 }} />
  </div>;

Polished.Props = {
  bgColor: '#65daa2',
  notes: `
- SASS/LESS helpers for CSS in JS
- lighten/darken/rgba/etc/etc
- I've heard it described as the lodash of CSS in JS libraries, and I think that's a fair comparison
- It was originally designed for usage in styled-components, but should work in any CSS in JS lib
  `
};

export const PolishedExample = () =>
  <CodePane lang="jsx" source={snippets.polished} textSize={20} />;

PolishedExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const PolishedMethods = () =>
  <div>
    {require('./assets/data/polished-colors.json').map(text =>
      <Code
        key={text}
        style={{ display: 'inline-block', marginTop: 12, marginLeft: 12 }}
        textColor="white"
      >
        {text}
      </Code>
    )}
  </div>;

PolishedMethods.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
These are just the color methods, but polished contains a bunch more including:

- em/rem helpers
- radial gradient generators
- normalize.css injection
- shorthands for common things such as text-overflow ellipsis, font-face, etc.
  `
};

export const LibraryDownloadCount = () =>
  <div>
    <Heading size={2} caps textColor="white">
      NPM Downloads
    </Heading>
    <NpmDownloads />
  </div>;

LibraryDownloadCount.Props = {
  bgColor: 'secondary',
  notes: `
- styled-components is probably the most popular, but of these, it was also the first
- glamorous requires glamor, so a lot of the glamor downloads are likely from glamorous
- aphrodite and radium were huge players (and may still be a good choice in certain scenarios), but I tend to like the others a bit more; radium is inline style based
  `
};

export const GithubStarsCount = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Github Stars
    </Heading>
    <GithubStars />
  </div>;

GithubStarsCount.Props = {
  bgColor: 'secondary',
  notes: `
- Similar story here, styled-components tends to be the most starred of each of them
- radium was a huge player prior to the introduction of the CSS injection style of libraries, which I think tend to be a bit more useful
  `
};

export const PayloadSizeChart = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Library Size (kb)
    </Heading>
    <LibraryPayload />
  </div>;

PayloadSizeChart.Props = {
  bgColor: 'secondary',
  notes: `
- The cost of using these libraries is non-null
- However, each of them is a fairly small payload GZipped
  `
};

/*
 * TODO: Fix this
 */
export const Companies = () => {
  const companies = Object.keys(logos);
  const split = Math.floor(companies.length / 2);
  const left = companies.splice(0, split);
  const right = companies.splice(0);
  const Loop = ({ items, style = {} }) =>
    <List>
      {items.map(company =>
        <ListItem key={company}>
          <Image src={images[company]} style={style} />
        </ListItem>
      )}
    </List>;

  const style = {
    opacity: 0.8,
    filter: `brightness(0) invert(1)`,
    transition: '175ms ease-in-out',
    ':hover': {
      opacity: 1
    }
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
  bgColor: 'secondary',
  notes: `
- I always like seeing lists of companies using tech.
- Makes me personally feel like there's validity to the practice if these other, big companies are also using it
- Also, Twitter, Facebook, and probably others!
  `
};
