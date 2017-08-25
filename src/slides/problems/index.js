import React from 'react';
import {
  BlockQuote,
  CodePane,
  Heading,
  Fill,
  Image,
  Layout,
  Link
} from 'spectacle';
import Person from 'emojione/assets/svg/1f3c3-1f3fb.svg';
import LightBulb from 'emojione/assets/svg/1f4a1.svg';

import preloader from 'spectacle/lib/utils/preloader';
import { Button } from '../../components/';

const images = {
  titleSlide: require('assets/images/title-slide.jpg'),
  opiLogo: require('assets/images/object-partners.svg'),
  opiMn: require('assets/images/opi-mn.jpg'),
  me: require('assets/images/me.jpg')
};

preloader(images);

export const NotBroken = () => (
  <Heading size={1} textColor="primary" caps fit>CSS is not Broken</Heading>
);

NotBroken.Props = {
  bgColor: 'secondary'
};

export const ButMaybeItIs = () => (
  <Heading size={1} textColor="primary" caps fit>But for some, it can be</Heading>
);

ButMaybeItIs.Props = {
  bgColor: 'secondary'
}

export const OpenMind = () => (
  <LightBulb height={256} width={256} />
);

export const FirstButton = () => {
  return (
    <div>
      <Button backgroundColor="#3ecf8e" color="white">Ooooh-wee. Look at me!</Button>
      <CodePane
        lang="css"
        source={require('assets/code/button-1.css')}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  )
};

export const SecondButton = () => {
  return (
    <div>
      <Button>Ooooh-wee. Look at me!</Button>
      <CodePane
        lang="css"
        source={require('assets/code/button-2.css')}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  )
};

export const ThirdButton = () => {
  return (
    <div>
      <Button fontSize="1rem" textTransform="lowercase">Ooooh-wee. Look at me!</Button>
      <CodePane
        lang="css"
        source={require('assets/code/button-3.css')}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  )
};

export const FourthButton = () => {
  return (
    <div>
      <Button fontSize="1rem" textTransform="lowercase" backgroundHoverColor="#7795f8" hoverColor="white">Ooooh-wee. Look at me!</Button>
      <CodePane
        lang="css"
        source={require('assets/code/button-4.css')}
        textSize={18}
        style={{
          marginTop: 20
        }}
      />
    </div>
  )
};

export const ButWait = () => (
  <Heading size={1} fit caps>But Wait&hellip;</Heading>
);

export const Bem = () => (
  <CodePane
    lang="css"
    source={require('assets/code/bem.css')}
  />
);

export const Run = class extends React.Component {
  state = {
    flipped: false
  };

  render() {
    const props = {
      height: 256,
      width: 256,
      ...(this.state.flipped ? {
        transform: `scale(-1, 1)`
      } : {})
    };
    return <Person onClick={() => this.setState({ flipped: !this.state.flipped })}{...props} />
  }
}

export const HardStuff = () => (
  <div>
    <BlockQuote>{require('assets/quotes/automation.raw')}</BlockQuote>
    <Link href="https://twitter.com/kentcdodds/status/899709586663452672">Link</Link>
  </div>
);
