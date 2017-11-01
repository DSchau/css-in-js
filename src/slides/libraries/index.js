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
import chunk from 'lodash.chunk';

import PolishedEmoji from 'emojione/assets/svg/2728.svg';

import { GithubStars, Image, LibraryPayload, NpmDownloads } from 'components';
import { FULL_WIDTH } from 'style';

const libraries = {
  styledComponents: require('./assets/images/styled-components.png'),
  glamorous: require('./assets/images/glamorous.svg'),
  emotion: require('./assets/images/emotion.png'),
  jss: require('./assets/images/extra-libraries/jss.png'),
  linaria: require('./assets/images/extra-libraries/linaria.png'),
  styletron: require('./assets/images/extra-libraries/styletron.svg'),
  fela: require('./assets/images/extra-libraries/fela.png'),
  aphrodite: require('./assets/images/extra-libraries/aphrodite.svg')
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
  libraries: require('./assets/images/libraries-optimized.jpeg'),
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

export const LibrariesIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    Libraries
  </Heading>;

LibrariesIntro.Props = {
  bgImage: images.libraries,
  bgDarken: 0.3,
  notes: `
The case for CSS in JS has hopefully been made apparent. These techniques solve real problems of CSS. But, how do they solve them? What libraries exist to implement these CSS in JS techniques, and what does writing code in each of them look like?
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
First, a caveat: most of these libraries are tied to React. However, not _all_ of them are tied to React, and I'll specifically point out libraries that do not require React.

In general, libraries that simply export a className hash (which can be used as a \`className\` in the consuming component) are typically framework agnostic. Some of the most interesting libraries expose several libraries, some of which can be used in any framework, and others that specifically target React.
  `
};

export const StyledComponents = () =>
  <Image src={libraries.styledComponents} />;

StyledComponents.Props = {
  bgColor: `rgb(219,112,147)`,
  notes: `
styled-components is what I would call the "gateway drug" to CSS in JS libraries. You author using template strings, so you can write CSS not as an object, but as a string and dasherized just like it's authored in CSS.

This means that styled-components is probably the easiest to get up and running, and I would recommend it to get your feet wet with CSS in JS techniques. In addition, it's a great choice for beginning to move off of a formerly vanilla CSS code base, because you can generally re-use most of your existing CSS, with some small modifications here and there.
  `
};

export const StyledComponentsExample = () =>
  <CodePane lang="jsx" source={snippets.styledComponents} textSize={24} />;

StyledComponentsExample.Props = {
  bgColor: 'code',
  notes: `
The css helper constructs a "mixin" that can be re-used and applied when needed. This can be particularly helpful to encapsulate rules, and then use them conditionally, when required.

Additionally, you can see here another of styled-components' great features. Prop injection! This means that props can be passed to these styled components, and then parsed and style rules can be conditionally applied/removed. Very cool!
  `
};

export const Glamorous = () => <Image src={libraries.glamorous} />;

Glamorous.Props = {
  bgColor: '#FFF2F2',
  notes: `
Glamorous built on some of the ideas of not only styled-components, but also glamor, the library that powers much of Glamorous' underlying functionality.

The central difference with Glamorous is that is expects objects (similar to the kind passed to inline styles), but that can also be merged with subsequent objects _and_ that can also accept things like media queries, pseudo styles, etc.

It might seem more natural to begin using styled-components, but as of late, I've found myself increasingly drawn to and really liking the functionality available in Glamorous, particularly with the style objects. Merging, conditional applying of rules, etc. feel very natural with Glamorous.

_Note: glamor, the underlying library, is framework agnostic!_
  `
};

export const GlamorousExample = () =>
  <CodePane lang="jsx" source={snippets.glamorous} textSize={24} />;

GlamorousExample.Props = {
  bgColor: 'code',
  notes: `
We can begin to get a solid feel for Glamorous' API. The function takes 0 to n objects (or functions that return an object). Any function is injected with the current props passed to the component, as well as a global theme prop if tying into Glamorous' exposed theming capability.

The code here is using the object rest spread syntax, which makes the code slightly more terse.
  `
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
Emotion is another excellent library that feels very similar to styled-components because it also allows for template literals to inject styles. The key difference, and a particularly interesting idea, is that it ships with a babel plugin which attempts to pre-compile the styles that aren't dynamic, thereby reducing the payload of the resulting bundle.

In general, I think the ideas of minimizing (or removing entirely!) a runtime are particularly interesting, and will remain an area to keep an eye on as the community matures and develops further processes and tooling.
  `
};

export const EmotionExample = () =>
  <CodePane lang="jsx" source={snippets.emotion} textSize={24} />;

EmotionExample.Props = {
  bgColor: 'code',
  notes: `
As you can see, the code feels _very_ similar to styled-components. If you're looking for a similar API but with some other benefits (and trade-offs), consider emotion as it's a very solid alternative.
  `
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
Polished is a *framework agnostic* collection of utility methods for CSS in JS functionality. Some have described it as the "lodash of CSS in JS," and that's a very fair comparison.

Many helpers/mixins are provided for usage in any CSS in JS library, and functionality such as \`lighten\`, \`darken\`, \`rgba\`, etc. can be utilized in your application to do some really useful things.
  `
};

export const PolishedExample = () =>
  <CodePane lang="jsx" source={snippets.polished} textSize={24} />;

PolishedExample.Props = {
  bgColor: 'code',
  notes: `
Polished is particularly useful in adjusting color (hue shifting, adjusting transpraency, darkening colors, lightening colors, etc.), but contains a number of other additional utilities.
  `
};

export const PolishedMethods = () =>
  <div>
    {require('./assets/data/polished-colors.json').map(text =>
      <Code key={text} style={{ display: 'inline-block' }} textColor="white">
        {text}
      </Code>
    )}
  </div>;

PolishedMethods.Props = {
  bgColor: 'code',
  notes: `
These are just the color methods, but polished contains a bunch more including:

- em/rem helpers
- radial gradient generators
- normalize.css injection (CSS reset)
- shorthands for common things such as text-overflow ellipsis, font-face, etc.
  `
};

export const OtherLibraries = () =>
  <div>
    {chunk(
      ['jss', 'linaria', 'styletron', 'fela', 'aphrodite'],
      2
    ).map(libraries =>
      <Layout key={libraries.join(' ')}>
        {libraries.map(library =>
          <Image key={library} src={images[library]} />
        )}
      </Layout>
    )}
  </div>;

OtherLibraries.Props = {
  bgColor: 'white',
  notes: `
If I had more time, I'd love to cover _every_ major library that can be used. Unfortunately, in the interest of time, I'm only able to cover a few. That said, there are _so_ many libraries in the frontend ecosystem that can be utilized.

Also note that every single one of these libraries is framework agnostic!

- [JSS](https://github.com/cssinjs/jss)
- [linaria](https://github.com/callstack/linaria)
- [styletron](https://github.com/rtsao/styletron)
- [fela](https://github.com/rofrischmann/fela)
- [aphrodite](https://github.com/Khan/aphrodite)
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
  ...FULL_WIDTH,
  bgColor: 'secondary',
  notes: `
It _can_ be helpful to consider library downlaod count, but that is in no way, shape, or form indicative of a library's quality or usefulness for your application.

That said, it can be valuable just to get a baseline of relative support, community activity, etc. which can be a metric to consider when targeting a CSS in JS library to use in your application. 

- styled-components and glamorous are two of the most popular and "hot" choices
- glamorous requires glamor, so a lot of the glamor downloads are likely from glamorous (but note: glamor can be used outside of glamorous)
- aphrodite and radium were huge players (and may still be a good choice in certain scenarios), but I tend to like the others a bit more
- radium is inline style based, but adds pseudo styles and other expected CSS functionality while still using inline styles; however, it's not quite as utilized or "in vogue" as it may have once been
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
  ...FULL_WIDTH,
  bgColor: 'secondary',
  notes: `
Similar story here, styled-components and glamorous are on the rise, while the others are relatively constant.
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
  ...FULL_WIDTH,
  bgColor: 'secondary',
  notes: `
The cost of using these libraries is non-null, even when using babel plugins or other techniques to reduce the file size as much as possible.

However, the cost is relatively small, so weighing developer utility and other benefits of CSS in JS vs. a relatively small size seems to be a fairly inoccuous concern.
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
Seeing some of the companies that are utilizing these technologies lends some validity to the practice and makes it more obvious that there's some real value being generated by the usage of these libraries.
  `
};
