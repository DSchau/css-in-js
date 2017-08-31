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
}

export const ThemingIntro = () => (
  <Heading size={1} caps textFont="Bitter">Theming</Heading>
);

ThemingIntro.Props = {
  bgColor: 'secondary'
};

export const ThemeProvider = () => (
  <CodePane
    lang="jsx"
    source={snippets.themeProviderOne}
    textSize={18}
  />
);

ThemeProvider.Props = {
  bgColor: CODE_BACKGROUND
};

export const ThemeProviderTwo = () => (
  <CodePane
    lang="jsx"
    source={snippets.themeProviderTwo}
    textSize={18}
  />
);

ThemeProviderTwo.Props = {
  bgColor: CODE_BACKGROUND
};
