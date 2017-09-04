import React, { Component } from 'react';
import { Appear, CodePane, Fill, Heading, Layout, S, Text } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import CrossArms from 'emojione/assets/svg/1f645-1f3fb.svg';

import { QuoteSlide } from 'components';
import { CODE_BACKGROUND } from 'style';

const images = {
  k: 'https://media.giphy.com/media/10sXTCdlsdKn8k/giphy.gif',
  lesh: require('./assets/images/ben-lesh-optimized.jpeg'),
  hardDrive: require('./assets/images/hard-drive-optimized.jpeg'),
  seperationOfConcerns: require('./assets/images/seperation-of-concerns-optimized.jpeg')
};

preloader(images);

const snippets = {
  inlineStyles: require('./assets/snippets/inline-styles.js'),
  semanticElements: require('./assets/snippets/semantic-elements.js'),
  classNameElements: require('./assets/snippets/class-name-elements.js')
};

export const BenefitsIntro = () => null;

BenefitsIntro.Props = {
  bgImage: images.k,
  notes: `
In an early job of mine, I was in a meeting where I said that a solution/idea wasn't good and left it at that. Another person in the meeting said something to the effect of "If you can't bring anything to the table, then don't say anything at all." Dude was a total dick, but that doesn't detract from the fact that he wasn't wrong. So now that we've illustrates some of the problems of CSS, the discussion will shift into what CSS in JS is, and how it can fix some of these aforementioned problems.  
  `
};

export const NotBroken = () =>
  <Heading size={1} textColor="primary" caps fit>
    CSS is not Broken
  </Heading>;

NotBroken.Props = {
  bgColor: 'secondary'
};

export const ButMaybeItIs = () =>
  <Heading size={1} textColor="primary" caps fit>
    <S type="italic">Maybe</S> we can do better
  </Heading>;

ButMaybeItIs.Props = {
  bgColor: 'secondary'
};

export const LeshTweet = () =>
  <QuoteSlide
    quote={require('./assets/quotes/seperation-of-concerns.raw')}
    image={images.lesh}
    author="Ben Lesh"
    to="https://twitter.com/benlesh/status/812092408519413761"
  />;

LeshTweet.Props = {
  bgImage: images.hardDrive,
  bgDarken: 0.75
};

export const SeperationOfConcerns = () =>
  <div>
    <Heading size={1} fit caps textFont="Bitter">
      Seperation of Concerns
    </Heading>
    <Heading size={1} caps textFont="Bitter" textColor="primary">
      <S type="italic">not</S>
    </Heading>
    <Heading size={1} fit caps textFont="Bitter">
      Seperation of Technologies
    </Heading>
  </div>;

SeperationOfConcerns.Props = {
  bgColor: 'secondary'
};

export const SeperationOfConcernsImage = () =>
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '85vh' }}>
    <Text textSize={18}>Cristiano Rastelli</Text>
  </div>;

SeperationOfConcernsImage.Props = {
  bgImage: images.seperationOfConcerns
};

export const IsNot = () =>
  <Heading size={1} fit caps textFont="Bitter">
    What it is <S type="italic">not</S>
  </Heading>;

IsNot.Props = {
  bgColor: 'secondary'
};

export const InlineStyles = class extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div onClick={() => this.setState({ count: this.state.count + 1 })}>
        <CodePane lang="jsx" source={snippets.inlineStyles} textSize={18} />
        {this.state.count > 0 &&
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: `translateY(-50%)`
            }}
          >
            {this.state.count >= 1 && <CrossArms height={256} width={256} />}
          </div>}
      </div>
    );
  }
};

InlineStyles.Props = {
  bgColor: CODE_BACKGROUND
};

export const Is = () =>
  <div>
    <Heading size={1} fit caps textFont="Bitter">
      What it <S type="italic">is</S>
    </Heading>
    <Heading size={6} caps textColor="white" textFont="Bitter">
      (and why it matters)
    </Heading>
  </div>;

Is.Props = {
  bgColor: 'secondary'
};

export const Abstractions = () =>
  <Heading size={2} fit caps>
    Abstractions upon CSS
  </Heading>;

export const ScopedStyles = () =>
  <Heading size={2} fit caps>
    True Encapsulation
  </Heading>;

export const Powerful = () =>
  <Heading size={2} fit caps>
    A more powerful CSS
  </Heading>;

Powerful.Props = {
  notes: `
- Leveraging the full power of JS teaches CSS new ways of doing things
- Full sharing of any constants; particulaly useful for breakpoints, colors, etc.
  `
};

export const RealStyles = () =>
  <Heading size={2} fit caps>
    <S type="italic">Real</S> Stylesheets
  </Heading>;

RealStyles.Props = {
  notes: `
- It takes the good parts of CSS (flexbox, styling, etc.)
- It "cures" the bad parts of CSS (globals, leaky abstractions, etc.)
  `
};

export const ComponentStyling = () =>
  <Heading size={2} fit caps>
    {'Component Styling Solution'.split(' ').map(word => {
      const first = word.slice(0, 1);
      const rest = word.slice(1);

      return (
        <span key={word}>
          <S type="underline">
            {first}
          </S>
          <span>
            {rest}{' '}
          </span>
        </span>
      );
    })}
  </Heading>;

ComponentStyling.Props = {
  notes: `
- It brings CSS into the component age
- We've removed globals from our JavaScript, why not do the same with CSS?
- Distributable, single import components that are entirely encapsulated
  `
};

export const JavaScriptStyling = () =>
  <Heading size={2} fit caps>
    {'JavaScript Styling Solution'.split(' ').map(word => {
      const first = word.slice(0, 1);
      const rest = word.slice(1);

      return (
        <span key={word}>
          <S type="underline">
            {first}
          </S>
          <span>
            {rest}{' '}
          </span>
        </span>
      );
    })}
  </Heading>;

JavaScriptStyling.Props = {
  notes: `
- It uses JavaScript to write styles
- This leverages the full power of the JS ecosystem
  `
};

export const SemanticElements = () =>
  <Heading size={2} fit caps>
    Semantic Elements
  </Heading>;

export const SemanticComparison = () =>
  <Layout style={{ width: '85vw' }}>
    <Fill style={{ width: '50%' }}>
      <CodePane lang="jsx" source={snippets.classNameElements} textSize={16} />
    </Fill>
    <Fill style={{ width: '100%' }}>
      <CodePane lang="jsx" source={snippets.semanticElements} textSize={16} />
    </Fill>
  </Layout>;

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