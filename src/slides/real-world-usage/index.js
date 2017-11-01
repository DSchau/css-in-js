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
  externalLibrariesStyledComponents: require('./assets/snippets/external-libraries-styled.js'),
  injectingGlobals: require('./assets/snippets/injecting-globals.js'),
  nesting: require('./assets/snippets/nesting.js')
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
    <Heading
      size={1}
      caps
      textFont="Bitter"
      textColor="primary"
      style={{ margin: 0, padding: 0, textShadow: '0 0 12px black !important' }}
    >
      (Usage)
    </Heading>
  </div>;

Usage.Props = {
  bgImage: images.realWorldUsage,
  bgDarken: 0.15,
  notes: `
I think it's important to actually show some real-world usage and common patterns for writing "real world" code in each of these libraries.

Common things like theming, utilizing props, inheriting/composing styles, etc.

_Note: I'm not endorsing any particular library, so I'll jump around a bit to give you a better idea of what each library feels like._
  `
};

export const UsingProps = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Using Props
    </Heading>
    <CodePane lang="jsx" source={snippets.props} textSize={18} />
  </div>;

UsingProps.Props = {
  bgColor: 'code',
  notes: `
Props injection is a natural, React-y method of altering a given component's style under certain conditions. For instance, if we were to re-visit our earlier CSS only button, we can create the same with props, but with complete encapsulation to that single button component.
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
A common question is that one of CSS' great features is inheritance and easy extension of base classes. Inheritance is typically accomplished in these libraries by injecting a previously styled component (😉) and adding additional styles, as needed. All previously defined styles will be merged with, or possibly replaced by, the new styles.
  `
};

export const RealCSS = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Real CSS
    </Heading>
    <CodePane lang="jsx" source={snippets.realCSS} textSize={20} />
  </div>;

RealCSS.Props = {
  bgColor: 'code',
  notes: `
One final reminder that in each of these libraries, real CSS and real stylesheets are added to the DOM. The value of CSS remains but with the clear and numerous benefits that CSS in JS provides.
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
But what about animations? Those inherently require a global animation name!

Most libraries include some type of helper utility to return a unique identifier/hash for those animations so that globals remain stripped from the code base.
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
If you're designing a component library and want to make it CSS in JS friendly, consider exposing the className prop for consumption.

- Most libraries inject a className--or provide a className--which would then be applied on top of the existing styles
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
Libraries that require a certain class structure (e.g. Bootstrap), can also work with CSS in JS libraries!

This example exposes a wrapped bootstrap Alert, which can then be used as a regular React component with a prop specifying the type of alert (e.g. \`success\`, \`info\`, etc.)
  `
};

export const InjectingGlobals = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Injecting Globals
    </Heading>
    <CodePane lang="jsx" source={snippets.injectingGlobals} textSize={20} />
  </div>;

InjectingGlobals.Props = {
  bgColor: 'code',
  notes: `
_Some_ of the time, it may be necessary to inject globals, in particular when targeting \`html\`, \`body\`, etc.

For these times, most libraries include a mechanism to inject a global into a DOM style tag.
  `
};

export const Nesting = () =>
  <div>
    <Heading size={2} caps textColor="white">
      Nesting Rules
    </Heading>
    <CodePane lang="jsx" source={snippets.nesting} textSize={20} />
  </div>;

Nesting.Props = {
  bgColor: 'code',
  notes: `
Nesting _is_ supported in most of these libraries, but it can be seen as a kind of anti-pattern in certain circumstances, _especially_ if you're targeting a child selector.

However, that said, [styled-components documentation](https://www.styled-components.com/docs/faqs) mentions that:

> ... Used sparingly it's a great way to lighten your code by reducing the need to create explicit classes for every element.

So use with caution, but it can be a decent technique to lighten some of your component's styles!
  `
};
