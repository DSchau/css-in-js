import React from 'react';
import {
  Code,
  CodePane,
  Heading,
  S
} from 'spectacle';

import StyledComponentsEmoji from 'emojione/assets/svg/1f485-1f3fb.svg';
import GlamorousEmoji from 'emojione/assets/svg/1f484.svg';
import EmotionEmoji from 'emojione/assets/svg/26a1.svg';

import { NpmDownloads } from 'components';

import { CODE_BACKGROUND } from 'style';

const snippets = {
  styledComponents: require('./assets/snippets/styled-components.js'),
  glamorous: require('./assets/snippets/glamorous.js'),
  emotion: require('./assets/snippets/emotion.js')
};

const Title = () => (
  <Heading size={1} fit caps>Libraries</Heading>
);

Title.Props = {
  bgColor: 'secondary'
};

const Caveat = () => (
  <Heading size={2} fit caps>Not <S type="italic">all</S> React</Heading>
);

export const StyledComponents = () => (
  <div>
    <Heading size={1}><Code textColor="white">styled-components</Code></Heading>
    <StyledComponentsEmoji height={128} width={128} />
  </div>
);

export const StyledComponentsExample = () => (
  <CodePane
    lang="jsx"
    source={snippets.styledComponents}
    textSize={20}
  />
);

StyledComponentsExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Glamorous = () => (
  <div>
    <Heading size={1}><Code textColor="white">glamorous</Code></Heading>
    <GlamorousEmoji height={128} width={128} />
  </div>
);

export const GlamorousExample = () => (
  <CodePane
    lang="jsx"
    source={snippets.glamorous}
    textSize={20}
  />
);

GlamorousExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Emotion = () => (
  <div>
    <Heading size={1}><Code textColor="white">emotion</Code></Heading>
    <EmotionEmoji height={128} width={128} />
  </div>
);

export const EmotionExample = () => (
  <CodePane
    lang="jsx"
    source={snippets.emotion}
    textSize={20}
  />
);

EmotionExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const LibraryDownloadCount = () => (
  <NpmDownloads
    libraries={[
      'styled-components'
    ]}
  />
);
