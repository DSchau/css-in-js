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
Early on in my career, I was in a meeting where I said that a solution/idea wasn't good and left it at that. Another person in the meeting said something to the effect of "If you can't bring anything to the table, then don't say anything at all." Dude was a total dick, but that doesn't detract from the fact that he wasn't wrong. So now that we've illustrated some of the problems of CSS, the discussion will shift into what CSS in JS is, and how it can fix some of these aforementioned problems aka I'm trying to bring something to the table :).  
  `
};

export const NotBroken = () =>
  <Heading size={1} textColor="primary" caps fit>
    CSS is not Broken
  </Heading>;

NotBroken.Props = {
  bgColor: 'secondary',
  notes: `
- I want to be *very* clear here, if you haven't seen yourself running into any of the aforementioned problems, and if you leave here unconvinced, that's fine!
- CSS as it exists will continue to exist
- It's not CSS in JS or CSS. CSS in JS uses CSS and uses what I think are the best parts of CSS (aka the rules) and avoids the worst parts (aka the nesting, globals, etc.)
  `
};

export const ButMaybeItIs = () =>
  <Heading size={1} textColor="primary" caps fit>
    <S type="italic">Maybe</S> we can do better
  </Heading>;

ButMaybeItIs.Props = {
  bgColor: 'secondary',
  notes: `
- Maybe we can use JS to solve some of the ills of CSS
- Maybe there's actually some validity to this practice, and
- Maybe it can really improve the quality and maintainability of your styling solution to your apps/websites/etc.
- Maybe we'll see :)
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
- So Ben Lesh (sarcastically) puts into words what I think is going to be the most common reaction to CSS in JS
- It goes against everything we've been taught, and the kind of "hyper modularization" that we've been saying in the JS ecosystem lately
  `
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
  bgColor: 'secondary',
  notes: `
However... seperation of concerns is not the same as seperation of technologies. It is incredibly likely that the rendering of a component will require intermingling between HTML, CSS, and JavaScript, and if we can make this intermingling as clean as possible, that's a win for code clarity and maintainability, not a loss.
  `
};

export const SeperationOfConcernsImage = () =>
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '85vh' }}>
    <Text textSize={18}>Cristiano Rastelli</Text>
  </div>;

SeperationOfConcernsImage.Props = {
  bgImage: images.seperationOfConcerns,
  notes: `
- Consider this great slide by Cristiano Rastelli
- The whole "component driven" model blurs the lines between HTML, CSS, and JavaScript because there inevitably will be shared concerns between a single component which is composed of each of these pieces
- A great illustration of this is with Vue's single file components, which a lot of people love
  `
};

export const IsNot = () =>
  <Heading size={1} fit caps textFont="Bitter">
    What it is <S type="italic">not</S>
  </Heading>;

IsNot.Props = {
  bgColor: 'secondary',
  notes: `
- Definition by contradiction :)
- CSS in JS is not, or not exclusively, inline styles
- CSS in JS, at its best, leverages CSS and the power of CSS
- This mines the best parts of CSS (e.g. rules, media queries, pseudo styles, etc.) still exist and are usable
- You can certainly go that route, and many libraries exist to go that route
  `
};

export const InlineStyles = class extends Component {
  static Props = {
    bgColor: CODE_BACKGROUND,
    notes: `
- This is an inline style
- This is not what I'd consider the best way to write CSS in JS
- You lose out on some of the best parts of CSS, including media queries, animations, pseudo styles (:hover, :focus, etc.), etc.!
    `
  };

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
- High time to actually begin talking about what CSS in JS **is**
- We'll go over some high-level goals of CSS in JS, as well as what it can do
- We'll also discuss in some detail how it can solve some of the previously mentioned problems with CSS in JS
  `
};

export const Abstractions = () =>
  <Heading size={2} fit caps>
    Abstractions upon CSS
  </Heading>;

Abstractions.Props = {
  notes: `
- CSS abstracts style to the document level
- CSS in JS abstracts style to the component level
- CSS in JS brings CSS into the "component age"
- In a similar way that React/Angular are abstractions on JavaScript, CSS in JS abstracts upon the base model of CSS and improves it
  `
};

export const ScopedStyles = () =>
  <Heading size={2} fit caps>
    True Encapsulation
  </Heading>;

ScopedStyles.Props = {
  notes: `
- Creating a hash for the class name inherently scopes the styles
- This gives us a shadow-dom like effect today, without a polyfill
- It truly brings the component-era to CSS, and eliminates issues with CSS such as globals and dead code elimination
  `
};

export const Powerful = () =>
  <Heading size={2} fit caps>
    A more powerful CSS
  </Heading>;

Powerful.Props = {
  notes: `
- Leveraging the full power of JS teaches CSS new ways of doing things
- Full sharing of any constants; particulaly useful for breakpoints, colors, etc.
- Injection/modification via props
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
- If you already know CSS, great! CSS in JS presumes that you do; use the properties/rules/etc. of CSS that you already know
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
- Easy to use, distribute, load with module bundler of choice
  `
};

export const SemanticElements = () =>
  <Heading size={2} fit caps>
    Semantic Elements
  </Heading>;

SemanticElements.Props = {
  notes: `
- True, unlimited semantic elements
- HTML5 gave us header, footer, section, aside, etc.
- Some of these libraries give us unlimited semantic "tags"
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
  bgColor: CODE_BACKGROUND,
  notes: `
- Makes it incredibly clear what the element is doing, just via its tag
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
- Removes the need to keep a mental modal (or debug!) stacking rule priorities
- Cures the global ailment
  `
};
