import React from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

import Interactive from "../assets/interactive";

import SlideDeck from './slides/';

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  titleSlide: require('../assets/title-slide.jpg'),
  opiLogo: require('../assets/images/object-partners.svg'),
  opiMn: require('../assets/images/opi-mn.jpg'),
  me: require('../assets/images/me.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#e54226",
  secondary: '#002635'
}, {
    primary: { name: 'Montserrat', googleFont: true, styles: ["400", "700i"] },
    secondary: { name: 'Bitter', googleFont: true, styles: ['400', '700'] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} progress="bar" transitionDuration={500}>
        {SlideDeck()}
      </Deck>
    );
  }
}

render(<Presentation />, document.getElementById('root'));
