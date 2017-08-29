import React from "react";
import { render } from "react-dom";
import 'es6-promise/auto';

import {
  Deck
} from "spectacle";

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

import createTheme from "spectacle/lib/themes/default";

import SlideDeck from './slides/';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
  primary: "#FF6138",
  secondary: '#002635'
}, {
    primary: { name: 'Montserrat', googleFont: true, styles: ["400", "700i"] },
    secondary: { name: 'Bitter', googleFont: true, styles: ['400', '700'] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} theme={theme} progress="bar" transitionDuration={500}>
        {SlideDeck()}
      </Deck>
    );
  }
}

render(<Presentation />, document.getElementById('root'));
