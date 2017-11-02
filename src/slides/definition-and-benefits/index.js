import React, { Component } from 'react';
import { Appear, CodePane, Fill, Heading, Layout, S, Text } from 'spectacle';

import CrossArms from 'emojione/assets/svg/1f645-1f3fb.svg';
import DownArrow from 'react-icons/lib/fa/arrow-down';

import { Image, QuoteSlide } from 'components';

const images = {
  k: 'https://media.giphy.com/media/10sXTCdlsdKn8k/giphy.gif',
  doBetter: require('./assets/images/do-better-optimized.jpeg'),
  lesh: require('./assets/images/ben-lesh-optimized.jpeg'),
  hardDrive: require('./assets/images/hard-drive-optimized.jpeg'),
  seperationOfConcerns: require('./assets/images/seperation-of-concerns-optimized.jpeg')
};

const snippets = {
  inlineStyles: require('./assets/snippets/inline-styles.js'),
  realStyles: {
    input: require('./assets/snippets/real-styles.input.js'),
    output: require('./assets/snippets/real-styles.output.html')
  },
  semanticElements: require('./assets/snippets/semantic-elements.js'),
  classNameElements: require('./assets/snippets/class-name-elements.js')
};

export const BenefitsIntro = () => null;

BenefitsIntro.Props = {
  bgImage: images.k,
  notes: `
Early in my career, I was in a meeting where I criticized a proposed solution that I thought to be poor, and left it at that. Another person in the meeting said "If you can't bring anything to the table, then don't say anything at all." While the character of the message was delivered imperfectly, the content of the message still resonates with me. It's easy to criticize something. It's far, far harder to criticize something, and propose something better, or that could be better.

At this point, the discussion will shift into what CSS in JS is, and how it can fix some of these aforementioned problems. In other words, let's bring something to the table!
  `
};

export const NotBroken = () =>
  <Heading size={1} textColor="white" caps fit>
    CSS is not Broken
  </Heading>;

NotBroken.Props = {
  bgImage: images.doBetter,
  bgDarken: 0.3,
  notes: `
It's not CSS in JS *or* CSS. It's CSS in JS *with* CSS.

The CSS you've formerly written can continue to be written with this paradigm shift. The best parts of CSS are maintained, and, for the most part, the ills of CSS are remedied with these new approaches.
  `
};

export const ButMaybeItIs = () =>
  <Heading size={1} textColor="primary" caps fit>
    <S type="italic">Maybe</S> we can make CSS better
  </Heading>;

ButMaybeItIs.Props = {
  bgColor: 'secondary',
  notes: `
Maybe by recontextualizing the problem and bringing the power of JavaScript to CSS we can solve some true problems with CSS.

Maybe there's actually some validity to this practice.

Maybe it can really improve the quality and maintainability of your application.

Maybe we will see!
  `
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
  bgDarken: 0.75,
  notes: `
*But*, *But*, *But*, you exclaim! This goes against everything we've been taught about seperation of concerns. HTML in my JS was already enough of a shift, but this is just too much!

It goes against this hyper-modularization we've seen in the JavaScript ecosystem.

It just _feels_ wrong.
  `
};

export const SeperationOfConcerns = () =>
  <div>
    <Heading size={1} fit caps textFont="Bitter">
      Separation of Concerns
    </Heading>
    <Heading size={1} caps textFont="Bitter" textColor="primary">
      <S type="italic">not</S>
    </Heading>
    <Heading size={1} fit caps textFont="Bitter">
      Separation of Technologies
    </Heading>
  </div>;

SeperationOfConcerns.Props = {
  bgColor: 'secondary',
  notes: `
However... seperation of concerns is not the same as seperation of technologies. It is incredibly likely that the rendering of a component will require intermingling between HTML, CSS, and JavaScript, and if we can make this intermingling as clean as possible, that's a win for code clarity and maintainability, not a loss.
  `
};

export const SeperationOfConcernsImage = () =>
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '85vh' }}>
    <Text textSize={18}>Cristiano Rastelli (@areaweb)</Text>
  </div>;

SeperationOfConcernsImage.Props = {
  bgImage: images.seperationOfConcerns,
  notes: `
Consider this great slide by [Cristiano Rastelli](https://twitter.com/areaweb).

The component driven model blurs the line between HTML, CSS, and JavaScript beacuse there will inevitably be shared concerns between a single component which is composed of these "disparate" parts.

Consider also Vue's single file components, which are a perfect encapsulation of this model.
  `
};

export const IsNot = () =>
  <Heading size={1} fit caps textFont="Bitter">
    What it is <S type="italic">not</S>
  </Heading>;

IsNot.Props = {
  bgColor: 'secondary',
  notes: `
Let's start with a definition by contradiction, or in other words, what CSS in JS is *not*.

CSS in JS is not, or at least not exclusively, inline styles. While inline styles are certainly an example of what CSS in JS can look like, they're not necessarily the best implementation for a variety of reasons. First and foremost, only a subset of CSS is supported, so things like pseudo styles (\`:hover\`, \`:focus\`, etc.), media queries, and a number of other useful and *required* CSS functionality is not supported with this implementation model. Additionally, inline styles can be difficult to override, which makes components that use them historically harder to extend.

You can certainly go this route, and several libraries exist to allow for this implementation while adding some of these needed features back, of particular note is [Radium](https://github.com/FormidableLabs/radium).
  `
};

export const InlineStyles = class extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div onClick={() => this.setState({ count: this.state.count + 1 })}>
        <CodePane lang="jsx" source={snippets.inlineStyles} textSize={24} />
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
  bgColor: 'code',
  notes: `
This is an example of an inline style, and one of the first methods advocated for CSS in JS.

This is _not_ what I'd consider the best way to write CSS in JS, although it does have its place (particularly if props change very regularly, or in other instances when performance may suffer with rapid changes).

As noted, you lose out entirely on some of the best parts of CSS, so this doesn't seem, to me, to be the best implementation of CSS in JS, or the one to reach for most readily.
  `
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
  bgColor: 'secondary',
  notes: `
It's high time to begin talking about what CSS in JS actually *is*. We'll go over some high level goals of CSS in JS, as well as some common patterns and coding techniques for what it can do for a modern application.

Additionally, detail will be provided for how it actually solves the aforementioned "problems with CSS".
  `
};

export const Abstractions = () =>
  <Heading size={2} fit caps>
    Abstractions upon CSS
  </Heading>;

Abstractions.Props = {
  notes: `
CSS abstracts style to the document level.

CSS in JS abstracts style to the component level.

In a similar way that React, Vue, Angular, et al. are abstractions on JavaScript, CSS in JS abstracts upon the base model of CSS and fixes some of its inherent issues!
  `
};

export const ScopedStyles = () =>
  <Heading size={2} fit caps>
    True Encapsulation
  </Heading>;

ScopedStyles.Props = {
  notes: `
With naming methodologies like BEM, we can get pseudo encapsulation. With Shadow DOM, we can get true encapsulation at the component level, but this requires a polyfill in many browsers and isn't quite at a point where it's the perfect solution for any application.

With CSS in JS, we can get true encapsulation at the component level, today. Under the hood, a unique hash will be generated for the class name, and a real stylesheet will be created with this class. This allows us to target a unique element (a component!) today, without polyfills and in an automated way so we never again need to waste cognitive cycles constructing meaningful, isolated class names.
  `
};

export const Powerful = () =>
  <Heading size={2} fit caps>
    A more powerful CSS
  </Heading>;

Powerful.Props = {
  notes: `
Leveraging the full power of JavaScript lets us extend CSS in new, interesting ways. We can create a "mixin" just like we can in SASS, LESS, etc. We can use helpers to lighten a color, darken a color, share style code, etc. We can, of course, easily share constants and modify them, as needed. We can do all of us in a language each of us are familiar with (JavaScript!), and without learning/remembering syntax for doing so in SASS, LESS, etc.
  `
};

export const RealStyles = () =>
  <Heading size={2} fit caps>
    <S type="italic">Real</S> Stylesheets
  </Heading>;

RealStyles.Props = {
  notes: `
A real stylesheet gives you the best parts of CSS (media queries, pseudo styles, flexbox, etc.).

It lessens the bad parts of CSS (globals!) by scoping to a class name

If you already know CSS, great! CSS in JS presumes that you do; the properties, rules, etc. of CSS that you already know and love continue to function just as they do in vanilla CSS.
  `
};

export const RealStylesExample = () =>
  <div>
    <CodePane source={snippets.realStyles.input} lang="jsx" textSize={24} />
    <DownArrow color="white" />
    <CodePane source={snippets.realStyles.output} lang="html" textSize={24} />
  </div>;

RealStylesExample.Props = {
  bgColor: 'code',
  notes: `
As an example, here is how styled-components (a library we will soon talk about) constructs a real style sheet. A template string is passed to the library containing the CSS styles. From these styles, a unique hash for a class name is created, and applied to a style tag in the head tags of your application. This constructed class name is automatically applied to your component!

It's an automated process to a previously manual problem, and you get the benefit of writing _real_ CSS!
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
CSS in JS brings CSS into the component era.

We've removed globals from our JavaScript, why should we not do the same with our CSS?

We've established the component model for our JavaScript, why not bring CSS into the fold and enhance upon this model?
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
Using JavaScript to write styles feels incredibly natural and intuitive, especially when considering the previous arguments we've made concerning sharing of constants, using JavaScript functions as mixins, etc.

_Additionally_, we are creating distributable, single import components that are entirely encapsulated. No configuring of loaders, no loading of additional stylesheets. One import, highly shareable, highly consumable, and highly simple!
  `
};

export const SemanticElements = () =>
  <Heading size={2} fit caps>
    Semantic Elements
  </Heading>;

SemanticElements.Props = {
  notes: `
CSS in JS gives us truly unlimited semantic elements.

HTML5 gave us \`header\`, \`footer\`, \`section\`, \`aside\`, and others.

CSS in JS gives us truly unlimited semantic elements that are semantically clear at a glance: \`Logo\`, \`Branding\`, \`Toolbar\`, \`Copyright\`, the possibilities are endless.
  `
};

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
  bgColor: 'code',
  notes: `
At a glance, each element's intent &amp; purpose is incredibly clear. On the left, _some_ of the element's meaning is clear. It's clear that semantic elements have meaningful value, and the fact that CSS in JS gives effectively unlimited semantic elements is an underappreciated win!
  `
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

StyleCognitiveLoad.Props = {
  notes: `
The left is the mental model we must keep in our minds when writing CSS centered around HTML. We must be aware that a class we apply in HTML is styled with a class name. We must be aware that these class names can cascade and stack, sometimes interfering in unforseen ways. These cacading rules then become stylesheets in our DOM that can themselves conflict.

The right is the mental model when writing CSS in JS. Write HTML (JSX) that is encapsulated with component-scoped styles. No stacking. Never worry again about CSS rule specificity (and no \`!important\` hacks), and truly think in components!
  `
};
