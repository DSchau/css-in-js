import React from 'react';
import { BlockQuote, Cite, Heading, Fill, Layout, Link, Text } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { Image, QuoteSlide } from 'components';

const images = {
  notScrapeable: require('./assets/images/not-scrapeable-optimized.jpeg'),
  editorTooling: require('./assets/images/editor-tooling-optimized.png'),
  nail: require('./assets/images/nail-optimized.jpeg'),
  max: require('./assets/images/max-stoiber-optimized.jpeg')
};

const snippets = {
  notScrapeable: require('./assets/quotes/not-scrapeable.raw')
};

preloader(images);

export const DrawbacksIntro = () =>
  <Heading size={1} textFont="Bitter" caps>
    Drawbacks
  </Heading>;

DrawbacksIntro.Props = {
  bgColor: 'secondary'
};

export const JavaScriptDisabled = () =>
  <div style={{ position: 'relative' }}>
    <Heading size={1} fit caps>
      0.2%
    </Heading>
    <Text
      textColor="white"
      textSize={12}
      style={{ position: 'absolute', bottom: -40, left: 0, right: 0 }}
    >
      https://blockmetry.com/blog/javascript-disabled
    </Text>
  </div>;

JavaScriptDisabled.Props = {};

export const NotScrapeable = () =>
  <Layout>
    <Fill
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image src={images.notScrapeable} />
    </Fill>
    <Fill
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <BlockQuote
        textColor="white"
        style={{
          borderLeft: '2px solid white',
          paddingLeft: 12,
          lineHeight: 1.25
        }}
      >
        {snippets.notScrapeable}
        <Cite>
          <Link
            href="https://twitter.com/Rich_Harris/status/899687506123251712"
            textColor="white"
          >
            Rich Harris
          </Link>
        </Cite>
      </BlockQuote>
    </Fill>
  </Layout>;

NotScrapeable.Props = {
  bgImage: images.nail,
  bgDarken: 0.5
};

export const EditorTooling = () => <Image src={images.editorTooling} />;

export const EditorToolingButWait = () =>
  <QuoteSlide
    quote={require('./assets/quotes/ide-integration.raw')}
    image={images.max}
    author="Max Stoiber"
    to="https://twitter.com/mxstbr/status/903277984739667970"
  />;

EditorToolingButWait.Props = {
  bgColor: 'secondary'
};
