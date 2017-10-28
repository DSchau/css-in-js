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
- Theming is a common concern (and can be kinda hard!) for CSS
- CSS in JS libraries generally expose a ThemeProvider, which then makes the theme rules & colors available to the underlying components
- Super easy to make a light/dark variant, for example
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
  notes: `
- I'm showing a theme object here, and then a component consuming the current theme value(s)
  `
};
