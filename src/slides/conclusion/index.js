import React, { Component } from 'react';
import { Heading, Link, List, ListItem } from 'spectacle';
import GlobeIcon from 'react-icons/lib/fa/globe';

import preloader from 'spectacle/lib/utils/preloader';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import Smiley from 'emojione/assets/svg/1f642.svg';

import { Image } from 'components';

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif',
  questions: 'https://media.giphy.com/media/l4FGroaKiE5uuMBiM/giphy.gif',
  feedback: require('./assets/images/feedback-optimized.png')
};

preloader(images);

export const Attributions = () =>
  <div>
    <Heading size={3} textColor="secondary" caps>
      Attributions
    </Heading>
    <List style={{ listStyleType: 'none', padding: 0 }}>
      {[
        [
          'https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660',
          'A Unified Styling Language (Blog Post)'
        ],
        [
          'https://markdalgleish.github.io/presentation-a-unified-styling-language/#14',
          'A Unified Styling Language (Presentation)'
        ],
        ['https://speakerdeck.com/vjeux/react-css-in-js', 'React: CSS in JS'],
        [
          'http://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/',
          'Writing your styles in JS ≠ writing inline styles'
        ],
        [
          'https://speakerdeck.com/didoo/let-there-be-peace-on-css',
          'Let there be Peace on CSS'
        ],
        [
          'https://reactarmory.com/answers/how-can-i-use-css-in-js-securely',
          'How Can I use CSS in JS Securely?'
        ]
      ].map(([href, description]) => {
        return (
          <ListItem key={description}>
            <GlobeIcon color="white" style={{ marginRight: 8 }} />
            <Link href={href} textColor="white">
              {description}
            </Link>
          </ListItem>
        );
      })}
    </List>
  </div>;

export const Links = () =>
  <div>
    <Heading size={3} textColor="secondary" caps>
      Requisite Links
    </Heading>
    <List style={{ listStyleType: 'none', padding: 0 }}>
      {[
        [
          'https://dschau.github.io/css-in-js-playground/',
          'CSS in JS Playground'
        ],
        ['https://github.com/DSchau/css-in-js-presentation', 'Slidedeck Repo']
      ].map(([href, description]) => {
        return (
          <ListItem key={description}>
            <GlobeIcon color="white" style={{ marginRight: 8 }} />
            <Link href={href} textColor="white">
              {description}
            </Link>
          </ListItem>
        );
      })}
    </List>
  </div>;

export const FinTheEndThatsAllFolks = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '85vh',
      width: '80vw',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}
  >
    <Link
      href="https://twitter.com/schaudustin"
      textColor="white"
      style={{ display: 'block' }}
    >
      <TwitterIcon color="white" style={{ marginRight: 6 }} />@schaudustin
    </Link>
    <Link
      href="https://github.com/dschau"
      textColor="white"
      style={{ display: 'block' }}
    >
      <GithubIcon color="white" style={{ marginRight: 6 }} />dschau
    </Link>
    <Link
      href="https://dustinschau.com"
      textColor="white"
      style={{ display: 'block' }}
    >
      <WebsiteIcon color="white" style={{ marginRight: 6 }} />website
    </Link>
  </div>;

FinTheEndThatsAllFolks.Props = {
  bgImage: images.thankYou,
  notes: `
- One final thanks to the organizers and sponsors of this conference, and for giving me an opportunity to present at my first ever conference
- Come talk to me tonight at the after party :)
  `
};
