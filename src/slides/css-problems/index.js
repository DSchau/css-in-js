import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  CodePane,
  Heading,
  Fill,
  Layout,
  Link,
  S as Span
} from 'spectacle';

import Person from 'emojione/assets/svg/1f3c3-1f3fb.svg';
import PersonThinking from 'emojione/assets/svg/1f914.svg';

import preloader from 'spectacle/lib/utils/preloader';
import { Button, ButtonLink, Image, QuoteSlide } from 'components';
import { CODE_BACKGROUND } from 'style';

const images = {
  cssProblems: require('./assets/images/css-problems-optimized.jpeg'),
  dodds: require('./assets/images/kent-c-dodds-optimized.jpeg'),
  hardStuff: require('./assets/images/hard-stuff-optimized.jpeg'),
  cssModules: require('./assets/images/css-modules-optimized.png'),
  shadowDom: require('./assets/images/shadow-dom-optimized.jpeg'),
  shadowDomCanIUse: require('./assets/images/shadow-dom-can-i-use-optimized.png'),
  scale: require('./assets/images/scale-optimized.jpeg'),
  deadCodeElimination: require('./assets/images/dead-code-elimination-optimized.jpeg'),
  sharingConstants: require('./assets/images/sharing-constants-optimized.jpeg'),
  cssProblemsVjeux: require('./assets/images/vjeux-problems-optimized.png')
};

const snippets = {
  cssOne: require('./assets/snippets/button-1.css'),
  cssTwo: require('./assets/snippets/button-2.css'),
  cssThree: require('./assets/snippets/button-3.css'),
  cssFour: require('./assets/snippets/button-4.css'),
  buttonLink: require('./assets/snippets/button-link.html'),
  cssFive: require('./assets/snippets/button-5.css'),
  cssSix: require('./assets/snippets/button-6.css'),
  bem: require('./assets/snippets/bem.css'),
  cssConstant: require('./assets/snippets/button-constant.css'),
  jsConstant: require('./assets/snippets/button-constant.js')
};

preloader(images);

export const TheProblems = () =>
  <Heading size={1} fit caps textFont="Bitter">
    The problems with CSS
  </Heading>;

TheProblems.Props = {
  bgImage: images.cssProblems,
  bgDarken: 0.5,
  notes: `
- This section will discuss the problems (as I see them) of CSS
- The goal is by the outset that these problems will be clear, and from this foundation we can begin to construct the argument for CSS in JS solutions
  `
};

export const FirstButton = () => {
  return (
    <div>
      <Button
        backgroundColor="#3ecf8e"
        color="white"
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssOne} textSize={18} />
    </div>
  );
};

FirstButton.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- We design a button component used in our application
- It looks great, works great, and meets every need we have
  `
};

export const SecondButton = () => {
  return (
    <div>
      <Button
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssTwo} textSize={18} />
    </div>
  );
};

SecondButton.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- We get a request for an alternately styled variant for one particular screen of the application
- We add some CSS and style it with a "secondary class"
  `
};

export const ThirdButton = () => {
  return (
    <div>
      <Button
        fontSize="1rem"
        textTransform="lowercase"
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssThree} textSize={18} />
    </div>
  );
};

ThirdButton.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- We get another request that the button is far too large
- We add a "tiny" class that can be added so that the button displays with a smaller font, padding, etc.
  `
};

export const FourthButton = () => {
  return (
    <div>
      <Button
        fontSize="1rem"
        textTransform="lowercase"
        backgroundHoverColor="#7795f8"
        hoverColor="white"
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssFour} textSize={18} />
    </div>
  );
};

FourthButton.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- We get a final request that the button needs to have a hover state that is inverted for a certain screen
  `
};

export const TheGlobals = {
  Props: {
    bgColor: CODE_BACKGROUND,
    code: [
      snippets.cssOne,
      snippets.cssTwo,
      snippets.cssThree,
      snippets.cssFour
    ].join('\n'),
    lang: 'css',
    ranges: [
      { title: 'Our clean CSS', loc: [0, 0] },
      { loc: [14, 15], title: '...is no so longer so clean' },
      { loc: [18, 19] },
      { loc: [23, 24] },
      { loc: [28, 29] },
      { title: 'Globals!', loc: [0, 0] }
    ],
    style: {
      fontSize: 24
    },
    notes: `
- Our clean CSS is no longer so clean
- Each of the "simple" requests are adding what is effectively globals, thereby making the CSS harder to maintain and use
- If one developer, this global problem can be maintained, but imagine bringing in new developers, or tens or hundreds of developers working on the same application?
- It's easy to imagine collision occurring
  `
  }
};

export const GlobalProblems = class GlobalProblems extends Component {
  static Props = {
    bgColor: CODE_BACKGROUND,
    notes: `
- Let's say down the road another developer is working on the project, and I'm long gone
- He/she simply wants to add a link styled like a button, and wants to style it in a certain way
- We can see how easy it is to begin combatting these globals, and how they can make it a worse developer experience (and worse code quality!) via the use of these globals
  `
  };

  state = {
    clicks: 0
  };

  render() {
    const style =
      this.state.clicks > 0
        ? {
            color: this.state.clicks === 1 ? 'white' : 'blue',
            backgroundColor: this.state.clicks === 1 ? 'blue' : 'white'
          }
        : {};
    return (
      <div onClick={() => this.setState({ clicks: this.state.clicks + 1 })}>
        <ButtonLink href="https://google.com" {...style}>
          Click me to do something wicked awesome
        </ButtonLink>
        <CodePane
          lang="html"
          source={snippets.buttonLink.replace(
            /(secondary)/,
            this.state.clicks > 1 ? '$1 inverted' : '$1'
          )}
          textSize={20}
        />
        <Appear>
          <CodePane lang="css" source={snippets.cssFive} textSize={20} />
        </Appear>
        <Appear>
          <CodePane lang="css" source={snippets.cssSix} textSize={20} />
        </Appear>
      </div>
    );
  }
};

export const ButWait = () =>
  <Heading size={1} fit caps>
    But Wait&hellip;
  </Heading>;

export const Bem = () =>
  <div>
    <CodePane lang="css" source={snippets.bem} textSize={20} />
    <CodePane
      lang="css"
      source={`.Block__element--modifier {}`}
      textSize={20}
    />
  </div>;

Bem.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- CSS naming methodologies like BEM exist to solve this problem!
- Also see Atomic CSS, SMACSS, Object oriented CSS, etc.
  `
};

export const Run = class extends React.Component {
  static Props = {
    notes: `
- Personally, I am not a fan of these methodologies
- They introduce cognitive overhead and introduce naming concerns (and anyone in CS knows how hard naming is!)
    `
  };

  state = {
    flipped: false
  };

  render() {
    const props = {
      height: 256,
      width: 256,
      ...(this.state.flipped
        ? {
            transform: `scale(-1, 1)`
          }
        : {})
    };
    return (
      <Person
        onClick={() => this.setState({ flipped: !this.state.flipped })}
        {...props}
      />
    );
  }
};

export const HardStuff = () =>
  <QuoteSlide
    quote={require('./assets/quotes/automation.raw')}
    image={images.dodds}
    author="Kent C. Dodds"
    to="https://twitter.com/kentcdodds/status/899709586663452672"
  />;

HardStuff.Props = {
  bgImage: images.hardStuff,
  bgDarken: 0.75,
  notes: `
- Consider this code by Kent C Dodds
- Why not use tools to automate these trivial naming concerns
- This is why we use tools, to automate and make something that can be hard, easy or easier
  `
};

export const Alternatives = () =>
  <Layout>
    <Fill>
      <Image src={images.cssModules} />
    </Fill>
    <Fill>
      <Image src={images.shadowDom} />
    </Fill>
  </Layout>;

Alternatives.Props = {
  bgColor: 'secondary',
  notes: `
- But this problem of globals has been solved
- Why should we care about CSS in JS when we have the shadow dom and/or CSS modules?
- CSS Modules is CSS in JS
- Shadow modules are going to be great, but not quite ready yet
  `
};

export const ShadowDomSupport = class extends Component {
  static Props = {
    notes: `
- Shadow DOM is definitely going to be something I want to keep an eye on
- That said, it may not quite be ready for prime time, as it doesn't have the greatest browser support (nor do web components)
- However, a polyfill does exist, so if you want to investigate whether shadow dom adequately solves the "global problem" of CSS, give it a shot!
    `
  };

  state = {
    clicked: false
  };
  render() {
    return (
      <div onClick={() => this.setState({ clicked: true })}>
        <Image src={images.shadowDomCanIUse} />
        {this.state.clicked &&
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: `translateY(-50%)`
            }}
          >
            <PersonThinking height={256} width={256} />
          </div>}
      </div>
    );
  }
};

export const ItDoesNotScale = () =>
  <Heading size={1} caps>
    CSS Does <Span type="underline">Not</Span> Scale
  </Heading>;

ItDoesNotScale.Props = {
  bgImage: images.scale,
  bgDarken: 0.5,
  notes: `
- In order to work around CSS's inherent scaling issues, tools like BEM, LESS, SASS, etc. are often utilized
- CSS in JS removes this cognitive overload
- Generally when I hear "does not scale," that can be a sign that the person just doesn't like the technology; however, it's actually true here!
- The earlier example with the button is an illustration of the underlying issue
- The bigger your application gets, the more CSS you will write, which creates more globals and a harder to maintain application
  `
};

export const DeadCodeElimination = () =>
  <Heading size={1} caps>
    Dead code Elimination
  </Heading>;

DeadCodeElimination.Props = {
  bgImage: images.deadCodeElimination,
  bgDarken: 0.5,
  notes: `
- Anyone who's ever re-factored a large app knows that it can be incredibly difficult to re-factor "unused" CSS
- Any rule could be used in unforseen places
- Removing rules can be spooky, and you need automated testing or a person who really knows the code to validate 0 unforeseen effects
- CSS in JS gives you confidence that by removing this component/CSS, you are only removing code applicable to this component  
  `
};

export const SharingConstants = () =>
  <Heading size={1} caps>
    Sharing Constants
  </Heading>;

SharingConstants.Props = {
  bgImage: images.sharingConstants,
  bgDarken: 0.5
};

export const SharingConstantsExample = () =>
  <Layout>
    <Fill>
      <CodePane lang="css" source={snippets.cssConstant} textSize={20} />
    </Fill>
    <Fill>
      <CodePane lang="js" source={snippets.jsConstant} textSize={20} />
    </Fill>
  </Layout>;

SharingConstantsExample.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- Anyone who's developed an application before has probably ran into this problem
- We can solve this with a build process and some defined constants, but that can oftentimes be fragile and/or brittle
- Why not use one "source of truth" for all shared application constants, whether it's constants used in the HTML, CSS, or JavaScript
  `
};

export const FacebookProblems = () =>
  <div>
    <Image src={images.cssProblemsVjeux} style={{ maxHeight: 500 }} />
    <Heading size={6} textColor="white" textSize={14}>
      Christopher Chedeau
    </Heading>
  </div>;

FacebookProblems.Props = {
  bgColor: 'black',
  notes: `
- Credit where credit is due
- Christopher Cheudeau (a developer at Facebook) illustrates these problems in a great talk a few years ago
- It's linked at the end if you want to take a look!
  `
};
