import React, { Component } from 'react';
import { Appear, CodePane, Fill, Heading, Layout, S } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import CrossArms from 'emojione/assets/svg/1f645-1f3fb.svg';

import { CODE_BACKGROUND } from 'style';

const images = {
  k: 'https://media.giphy.com/media/10sXTCdlsdKn8k/giphy.gif'
};

preloader(images);

const snippets = {
  inlineStyles: require('./assets/snippets/inline-styles.js')
};

export const BenefitsIntro = () => null;

BenefitsIntro.Props = {
  bgImage: images.k
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

export const IsNot = () =>
  <Heading size={1} fit caps>
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
  <Heading size={1} fit caps>
    What it <S type="italic">is</S>
  </Heading>;

Is.Props = {
  bgColor: 'secondary'
};

export const Abstractions = () =>
  <Heading size={2} textFont="bitter" fit caps>
    Abstractions upon CSS
  </Heading>;

export const ScopedStyles = () =>
  <Heading size={2} textFont="bitter" fit caps>
    True Encapsulation
  </Heading>;

export const Powerful = () =>
  <Heading size={2} textFont="bitter" fit caps>
    A more powerful CSS
  </Heading>;

export const RealStyles = () =>
  <Heading size={2} textFont="bitter" fit caps>
    <S type="italic">Real</S> Stylesheets
  </Heading>;

export const ComponentStyling = () =>
  <Heading size={2} textFont="bitter" fit caps>
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

export const JavaScriptStyling = () =>
  <Heading size={2} textFont="bitter" fit caps>
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
