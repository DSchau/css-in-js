import React from 'react';
import { Code, CodePane, Heading } from 'spectacle';

const images = {
  realWorldUsage: require('./assets/images/real-world-usage-optimized.jpeg')
};

const snippets = {
  props: require('./assets/snippets/props-styled-components.js'),
  composition: require('./assets/snippets/composition.js'),
  animation: require('./assets/snippets/animation.js'),
  realCSS: require('./assets/snippets/real-css.js'),
  className: require('./assets/snippets/class-name.js'),
  externalLibrariesGlamorous: require('./assets/snippets/external-libraries-glamorous.js'),
  externalLibrariesStyledComponents: require('./assets/snippets/external-libraries-styled.js')
};

export const Usage = () =>
  <div
    style={{
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      height: '85vh'
    }}
  >
    <Heading size={1} caps textFont="Bitter" style={{ margin: 0, padding: 0 }}>
      (Usage)
    </Heading>
  </div>;

Usage.Props = {
  bgImage: images.realWorldUsage,
  bgDarken: 0.15,
  notes: `
- Wanted to give each of you a feel for what it feels like actually writing code in each of these libraries
- Doing some common things like theming, using props, composing/extending components, etc.
- Note I'm not endorsing any particular library, so I tried to show each of them at their best!
- Additionally note, nearly all of these examples are React based, but the underlying ideas could likely be utilized in other frameworks/libraries
  `
};

export const UsingProps = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Using Props
    </Heading>
    <CodePane lang="jsx" source={snippets.props} textSize={16} />
  </div>;

UsingProps.Props = {
  bgColor: 'code',
  notes: `
- Props injection can be super handy to just make a little change here or there
- For instance, a button may want to take an inverted style, or even a backgroundColor prop to change the bgColor
  `
};

export const Inheritance = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Inheritance
    </Heading>
    <CodePane lang="jsx" source={snippets.composition} textSize={20} />
  </div>;

Inheritance.Props = {
  bgColor: 'code',
  notes: `
- How do we extend a component?
- You use it like a function, and the extension takes precedence over the underyling style
- styled-components has a similar API, as well as a new \`.extend\` function that exists on a styled component
  `
};

export const RealCSS = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Real CSS
    </Heading>
    <CodePane lang="jsx" source={snippets.realCSS} textSize={16} />
  </div>;

RealCSS.Props = {
  bgColor: 'code',
  notes: `
- Just wanted to drive home that this is truly real CSS
- Most of these libraries (particularly styled-components and glamorous) inject real stylesheets with a unique class name
- This means you get the full power of CSS including media queries, pseduo styles, etc.
  `
};

export const Animation = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Animation
    </Heading>
    <CodePane lang="jsx" source={snippets.animation} textSize={20} />
  </div>;

Animation.Props = {
  bgColor: 'code',
  notes: `
- But what about animations, particularly keyframe animations? Those are global!
- Most libraries include some type of helper to return a unique identifier for these animations so no globals are introduced!
  `
};

export const UsingClassName = () =>
  <div>
    <Heading size={2} textColor="white" textSize={40}>
      Consuming
      <Code textColor="white" textSize={40} style={{ textTransform: 'none' }}>
        className
      </Code>
    </Heading>
    <CodePane lang="jsx" source={snippets.className} textSize={24} />
  </div>;

UsingClassName.Props = {
  bgColor: 'code',
  notes: `
If you're designing a component library and want to make it CSS in JS friendly, consider exposing the className prop

- these libraries inject a className, which would then be applied on top of the existing styles
- Note this may not work perfectly, but it's worth checking out!
- Additionally, if you are "wrapping" your styled elements, this is a great way to make those wrappers extensible, as well
  `
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
    />
  </div>;

ExternalLibraries.Props = {
  bgColor: 'code',
  notes: `
- Libraries that require a certain class structure (e.g. Bootstrap), can also work with CSS in JS libraries!
- This example exposes a wrapped bootstrap Alert, which can then be used as a regular React component
  `
};

export const ExternalLibrariesStyled = () =>
  <CodePane
    lang="jsx"
    source={snippets.externalLibrariesStyledComponents}
    textSize={20}
  />;

ExternalLibrariesStyled.Props = {
  bgColor: 'code',
  notes: `
- The styled-components variant
  `
};
