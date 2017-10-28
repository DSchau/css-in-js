import React from 'react';
import { render } from 'react-dom';
import 'es6-promise/auto';

import { Deck } from 'spectacle';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

import createTheme from 'spectacle/lib/themes/default';

import SlideDeck from './slides/';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import { CODE_BACKGROUND, PRIMARY, SECONDARY } from 'style';

const theme = createTheme(
  {
    primary: PRIMARY,
    secondary: SECONDARY,
    code: CODE_BACKGROUND
  },
  {
    primary: { name: 'Montserrat', googleFont: true, styles: ['400', '700i'] },
    secondary: { name: 'Bitter', googleFont: true, styles: ['400'] }
  }
);

export default class Presentation extends React.Component {
  state = {
    theme
  };

  componentDidMount() {
    // make a request to an endpoint to retrieve primary, secondary
  }

  render() {
    return (
      <Deck
        transition={['slide']}
        theme={this.state.theme}
        progress="bar"
        transitionDuration={500}
      >
        {SlideDeck()}
      </Deck>
    );
  }
}

render(<Presentation />, document.getElementById('root'));
