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
  bgColor: 'secondary'
};

export const FirstButton = () => {
  return (
    <div>
      <Button backgroundColor="#3ecf8e" color="white">
        Ooooh-wee. Look at me!
      </Button>
      <CodePane
        lang="css"
        source={snippets.cssOne}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  );
};

FirstButton.Props = {
  bgColor: CODE_BACKGROUND
};

export const SecondButton = () => {
  return (
    <div>
      <Button>Ooooh-wee. Look at me!</Button>
      <CodePane
        lang="css"
        source={snippets.cssTwo}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  );
};

SecondButton.Props = {
  bgColor: CODE_BACKGROUND
};

export const ThirdButton = () => {
  return (
    <div>
      <Button fontSize="1rem" textTransform="lowercase">
        Ooooh-wee. Look at me!
      </Button>
      <CodePane
        lang="css"
        source={snippets.cssThree}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  );
};

ThirdButton.Props = {
  bgColor: CODE_BACKGROUND
};

export const FourthButton = () => {
  return (
    <div>
      <Button
        fontSize="1rem"
        textTransform="lowercase"
        backgroundHoverColor="#7795f8"
        hoverColor="white"
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane
        lang="css"
        source={snippets.cssFour}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  );
};

FourthButton.Props = {
  bgColor: CODE_BACKGROUND
};

export const TheGlobals = {
  Props: {
    bgColor: 'secondary',
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
    }
  }
};

export const GlobalProblems = class GlobalProblems extends Component {
  static Props = {
    bgColor: CODE_BACKGROUND
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
      style={{
        marginTop: 12
      }}
    />
  </div>;

Bem.Props = {
  bgColor: CODE_BACKGROUND
};

export const Run = class extends React.Component {
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
  bgDarken: 0.75
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
  `
};

export const DeadCodeElimination = () => <Heading size={1} caps>Dead code Elimination</Heading>;

DeadCodeElimination.Props = {
  bgImage: images.deadCodeElimination,
  bgDarken: 0.5,
  notes: `
- Anyone who's ever re-factored a large app knows that it can be incredibly difficult to re-factor "unused" CSS
- Any rule could be used in unforseen places
- CSS in JS gives you confidence that by removing this component/CSS, you are only removing code applicable to this component  
  `
};

export const SharingConstants = () => <Heading size={1} caps>Sharing Constants</Heading>;

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
  bgColor: CODE_BACKGROUND
};

export const FacebookProblems = () => (
  <div>
    <Image src={images.cssProblemsVjeux} style={{ maxHeight: 500 }} />
    <Heading size={6} textColor="white" textSize={14}>Christopher Chedeau</Heading>
  </div>
);

FacebookProblems.Props = {
  bgColor: 'black'
};
