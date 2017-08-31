import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  CodePane,
  Heading,
  Fill,
  Image,
  Layout,
  Link
} from 'spectacle';

import Person from 'emojione/assets/svg/1f3c3-1f3fb.svg';

import preloader from 'spectacle/lib/utils/preloader';
import { Button, ButtonLink, QuoteSlide } from 'components';
import { CODE_BACKGROUND } from 'style';

const images = {
  dodds: require('./assets/images/kent-c-dodds-optimized.jpeg'),
  hardStuff: require('./assets/images/hard-stuff-optimized.jpeg')
};

const snippets = {
  cssOne: require('./assets/snippets/button-1.css'),
  cssTwo: require('./assets/snippets/button-2.css'),
  cssThree: require('./assets/snippets/button-3.css'),
  cssFour: require('./assets/snippets/button-4.css'),
  buttonLink: require('./assets/snippets/button-link.html'),
  cssFive: require('./assets/snippets/button-5.css'),
  cssSix: require('./assets/snippets/button-6.css'),
  bem: require('./assets/snippets/bem.css')
};

preloader(images);

export const TheProblems = () =>
  <Heading size={1} fit caps>
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
    const style = this.state.clicks > 0 ? { color: this.state.clicks === 1 ? 'white' : 'blue' , backgroundColor: this.state.clicks === 1 ? 'blue' : 'white' } : {};
    return (
      <div onClick={() => this.setState({ clicks: this.state.clicks + 1 })}>
        <ButtonLink href="https://google.com" {...style}>Click me to do something wicked awesome</ButtonLink>
        <CodePane
          lang="html"  
          source={snippets.buttonLink.replace(/(secondary)/, this.state.clicks > 1 ? '$1 inverted' : '$1')}
          textSize={20}
        />
        <Appear>
          <CodePane
            lang="css"
            source={snippets.cssFive}
            textSize={20}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="css"
            source={snippets.cssSix}
            textSize={20}
          />
        </Appear>
      </div>
    );
  }
}

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
  bgDarken: 0.5
};
