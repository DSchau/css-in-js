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

import { CODE_BACKGROUND } from 'style';

const snippets = {
  themeProviderOne: require('./assets/snippets/theme-provider-1'),
  themeProviderTwo: require('./assets/snippets/theme-provider-2')
};

export const ThemingIntro = () =>
  <Heading size={1} caps textFont="Bitter">
    Theming
  </Heading>;

ThemingIntro.Props = {
  bgColor: 'secondary',
  notes: `
- Theming is a common concern (and can be kinda hard!) for CSS
- CSS in JS libraries generally expose a ThemeProvider, which then makes the theme rules & colors available to the underlying components
- Super easy to make a light/dark variant, for example
  `
};

export const ThemeProvider = () =>
  <CodePane lang="jsx" source={snippets.themeProviderOne} textSize={18} />;

ThemeProvider.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- I'm showing a theme object here, and then a component consuming the current theme value(s)
  `
};

export const ThemeProviderTwo = () =>
  <CodePane lang="jsx" source={snippets.themeProviderTwo} textSize={18} />;

ThemeProviderTwo.Props = {
  bgColor: CODE_BACKGROUND,
  notes: `
- Showing the ThemeProvider in usage (this sets context values)
  `
};
