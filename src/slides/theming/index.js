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

const images = {
  theming: require('./assets/images/theming-optimized.jpeg')
};

const snippets = {
  themeProvider: require('./assets/snippets/theme-provider')
};

export const ThemingIntro = () =>
  <Heading size={1} caps fit textFont="Bitter">
    Theming
  </Heading>;

ThemingIntro.Props = {
  bgImage: images.theming,
  bgDarken: 0.6,
  notes: `
Theming is a particularly common use case that can be semi-difficult to architect cleanly. Most of these major libraries expose a \`ThemeProvider\` component which can be used to provide a theme (via context) to each styled component.

It is, for instance, incredibly easy to make a light/dark theme for an application, or any number of color variants.
  `
};

export const ThemeProvider = () => null;

ThemeProvider.Props = {
  bgColor: 'code',
  code: snippets.themeProvider,
  lang: 'jsx',
  ranges: [
    { title: 'Theming', loc: [0, 0] },
    { loc: [0, 1], title: 'ThemeProvider' },
    { loc: [2, 13] },
    { loc: [14, 22] },
    { loc: [29, 39] }
  ],
  showLineNumbers: false,
  notes: `
Check out the [code slide](https://cssinjs.dustinschau.com/#/theme-provider) to see the full, navigable example
  `
};
