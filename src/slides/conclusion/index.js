import React, { Component } from 'react';
import {
  Heading,
  Link,
  List,
  ListItem
} from 'spectacle';
import GlobeIcon from 'react-icons/lib/fa/globe';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif',
  questions: 'https://media.giphy.com/media/l4FGroaKiE5uuMBiM/giphy.gif',
  questionsAlternate: 'https://media.giphy.com/media/sEqhGfTFcAUXm/giphy.gif'
};

preloader(images);

export const Attributions = () => (
  <div>
    <Heading size={3} textColor="secondary" caps>Attributions</Heading>
    <List style={{ listStyleType: 'none', padding: 0 }}>
      {
        [
          ['https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660', 'A Unified Styling Language'],
          ['http://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/', 'Writing your styles in JS ≠ writing inline styles']
        ]
          .map(([href, description]) => {
            return <ListItem key={description}>
              <GlobeIcon color="white" style={{ marginRight: 8 }} />
              <Link href={href} textColor="white">{description}</Link>
            </ListItem>;
          })
      }
    </List>
  </div>
);

export const Links = () => (
  <div>
    <Heading size={3} textColor="secondary" caps>Requisite Links</Heading>
    <List style={{ listStyleType: 'none', padding: 0 }}>
      {
        [
          ['https://github.com/DSchau/css-in-js-presentation', 'Slidedeck Repo'],
          ['https://dschau.github.io/css-in-js-playground/', 'CSS in JS Playground'],
        ]
          .map(([href, description]) => {
            return <ListItem key={description}>
              <GlobeIcon color="white" style={{ marginRight: 8 }} />
              <Link href={href} textColor="white">{description}</Link>
            </ListItem>;
          })
      }
    </List>
  </div>
);

export const Questions = class extends Component {
  static Props = {
    bgImage: images.questions
  };

  state = {
    current: 0,
    all: ['Questions', 'Preguntas', '问题', 'Fragen', '質問', 'quaestiones', 'pytania', 'вопросов', 'الأسئلة']
  }

  componentDidMount() {
    setInterval(() => {
      const current = this.state.current;
      const next = this.state.all[current + 1] ? current + 1 : 0;
      this.setState({
        current: next
      });
    }, 5000);
  }

  render() {
    const text = this.state.all[this.state.current];
    return <Heading size={1} caps textColor="black">{text}?</Heading>
  }
}


export const FinTheEndThatsAllFolks = () => null;

FinTheEndThatsAllFolks.Props = {
  bgImage: images.thankYou
};
