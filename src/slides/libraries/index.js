import React from 'react';
import { Code, CodePane, Heading, S, Text } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import StyledComponentsEmoji from 'emojione/assets/svg/1f485-1f3fb.svg';
import GlamorousEmoji from 'emojione/assets/svg/1f484.svg';
import EmotionEmoji from 'emojione/assets/svg/26a1.svg';
import PolishedEmoji from 'emojione/assets/svg/2728.svg';

import { GithubStars, LibraryPayload, NpmDownloads } from 'components';

import { CODE_BACKGROUND } from 'style';

const images = {
  mostlyReact: 'https://thumbs.gfycat.com/RegalFlickeringAmphibian-size_restricted.gif'
};

const snippets = {
  styledComponents: require('./assets/snippets/styled-components.js'),
  glamorous: require('./assets/snippets/glamorous.js'),
  emotion: require('./assets/snippets/emotion.js'),
  polished: require('./assets/snippets/polished.js')
};

preloader(images);

export const LibrariesIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    Libraries
  </Heading>;

LibrariesIntro.Props = {
  bgColor: 'secondary'
};

export const Caveat = () => (
  <div>
    <Heading size={2} fit caps textColor="white">
      Not <S type="italic">all</S> React
    </Heading>
    <Heading size={6} caps textColor="white">
      &hellip; but Mostly
    </Heading>
  </div>
)

Caveat.Props = {
  bgImage: images.mostlyReact,
  bgDarken: 0.25
};

export const StyledComponents = () =>
  <div>
    <Heading size={1}>
      <Code textColor="white">styled-components</Code>
    </Heading>
    <StyledComponentsEmoji height={128} width={128} />
  </div>;

export const StyledComponentsExample = () =>
  <CodePane lang="jsx" source={snippets.styledComponents} textSize={20} />;

StyledComponentsExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Glamorous = () =>
  <div>
    <Heading size={1}>
      <Code textColor="white">glamorous</Code>
    </Heading>
    <GlamorousEmoji height={128} width={128} />
  </div>;

export const GlamorousExample = () =>
  <CodePane lang="jsx" source={snippets.glamorous} textSize={20} />;

GlamorousExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Emotion = () =>
  <div>
    <Heading size={1}>
      <Code textColor="white">emotion</Code>
    </Heading>
    <EmotionEmoji height={128} width={128} />
  </div>;

export const EmotionExample = () =>
  <CodePane lang="jsx" source={snippets.emotion} textSize={20} />;

EmotionExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const Polished = () => (
  <div>
    <Heading size={1}>
      <Code textColor="white">polished</Code>
    </Heading>
    <PolishedEmoji height={128} width={128} />
  </div>
);

export const PolishedExample = () =>
  <CodePane lang="jsx" source={snippets.polished} textSize={20} />;

PolishedExample.Props = {
  bgColor: CODE_BACKGROUND
};

export const PolishedMethods = () => (
  <div>
    {
      require('./assets/data/polished-colors.json')
        .map(text => <Code key={text} style={{ display: 'inline-block', marginTop: 12, marginLeft: 12 }} textColor="white">{text}</Code>)
    }
  </div>
);

PolishedMethods.Props = {
  bgColor: CODE_BACKGROUND
};

export const LibraryDownloadCount = () => (
  <div>
    <Heading size={2} caps textColor="white">NPM Downloads</Heading>
    <NpmDownloads />
  </div>
);

LibraryDownloadCount.Props = {
  bgColor: 'secondary'
};

export const GithubStarsCount = () => (
  <div>
    <Heading size={2} caps textColor="white">Github Stars</Heading>
    <GithubStars />
  </div>
);

GithubStarsCount.Props = {
  bgColor: 'secondary'
};

export const PayloadSizeChart = () => (
  <div>
    <Heading size={2} caps textColor="white">Library Size (kb)</Heading>
    <LibraryPayload />
  </div>
);

PayloadSizeChart.Props = {
  bgColor: 'secondary'
};
