import React from 'react';
import { Code, CodePane, Heading } from 'spectacle';

import { CODE_BACKGROUND } from 'style';

const snippets = {
  props: require('./assets/snippets/props-styled-components.js'),
  propsGlamorous: require('./assets/snippets/props-glamorous.js'),
  composition: require('./assets/snippets/composition.js'),
  animation: require('./assets/snippets/keyframes.js'),
  realCSS: require('./assets/snippets/real-css.js'),
  className: require('./assets/snippets/class-name.js'),
  externalLibrariesGlamorous: require('./assets/snippets/external-libraries-glamorous.js'),
  externalLibrariesStyledComponents: require('./assets/snippets/external-libraries-styled.js')
};

export const WritingCssIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    Real World Usage
  </Heading>;

WritingCssIntro.Props = {
  bgColor: 'secondary'
};

export const UsingProps = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Using Props
    </Heading>
    <CodePane
      lang="jsx"
      source={snippets.props}
      textSize={16}
      style={{
        marginTop: 12
      }}
    />
  </div>;

UsingProps.Props = {
  bgColor: CODE_BACKGROUND
};

export const UsingPropsWithGlamorous = () =>
  <CodePane
    lang="jsx"
    source={snippets.propsGlamorous}
    textSize={16}
    style={{
      marginTop: 12
    }}
  />;

UsingPropsWithGlamorous.Props = {
  bgColor: CODE_BACKGROUND
};

export const Composition = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Composition
    </Heading>
    <CodePane
      lang="jsx"
      source={snippets.composition}
      textSize={20}
      style={{
        marginTop: 12
      }}
    />
  </div>;

Composition.Props = {
  bgColor: CODE_BACKGROUND
};

export const RealCSS = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Real CSS
    </Heading>
    <CodePane
      lang="jsx"
      source={snippets.realCSS}
      textSize={16}
      style={{
        marginTop: 12
      }}
    />
  </div>;

RealCSS.Props = {
  bgColor: CODE_BACKGROUND
};

export const Animation = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Animation
    </Heading>
    <CodePane
      lang="jsx"
      source={snippets.animation}
      textSize={16}
      style={{
        marginTop: 12
      }}
    />
  </div>;

Animation.Props = {
  bgColor: CODE_BACKGROUND
};

export const UsingClassName = () =>
  <div>
    <Code textColor="white" style={{ textTransform: 'none' }}>
      className
    </Code>
    <CodePane
      lang="jsx"
      source={snippets.className}
      textSize={20}
      style={{
        marginTop: 12
      }}
    />
  </div>;

UsingClassName.Props = {
  bgColor: CODE_BACKGROUND
};

export const ExternalLibraries = () =>
  <div>
    <Heading size={2} caps textColor="white">
      External Libraries
    </Heading>
    <CodePane
      lang="jsx"
      source={snippets.externalLibrariesGlamorous}
      textSize={20}
      style={{
        marginTop: 12
      }}
    />
  </div>;

ExternalLibraries.Props = {
  bgColor: CODE_BACKGROUND
};

export const ExternalLibrariesStyled = () =>
  <CodePane
    lang="jsx"
    source={snippets.externalLibrariesStyledComponents}
    textSize={20}
    style={{
      marginTop: 12
    }}
  />;

ExternalLibrariesStyled.Props = {
  bgColor: CODE_BACKGROUND
};
