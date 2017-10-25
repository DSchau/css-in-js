import React from 'react';
import { BlockQuote, Cite, Heading, Fill, Layout, Link, Text } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import { Image, QuoteSlide } from 'components';

const images = {
  drawbacks: require('./assets/images/drawbacks-optimized.jpeg'),
  notScrapeable: require('./assets/images/not-scrapeable-optimized.jpeg'),
  editorTooling: require('./assets/images/editor-tooling-optimized.png'),
  editorToolingPlugin:
    'https://thumbs.gfycat.com/IdioticShimmeringAfricanwildcat-size_restricted.gif',
  nail: require('./assets/images/nail-optimized.jpeg'),
  max: require('./assets/images/max-stoiber-optimized.jpeg'),
  unsure: 'https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif'
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
  bgImage: images.drawbacks,
  bgDarken: 0.3,
  notes: `
- In the interest of fairness, CSS in JS certainly has some drawbacks worth considering
  `
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

JavaScriptDisabled.Props = {
  notes: `
- When JavaScript is disabled (still a concern!), how do we progressively enhance?
- This is precisely where Progressive Enhancement rears its head
- You can mitigate with statically rendering or server-side rendering (hydrating) some launch HTML, or at least using the 'noscript' tag to display some content
- 0.2% may not seem like much, but if you're Facebook scale or driving a lot of traffic it's a concern
  - 1,000,000 monthly users means 2,000 users may not be getting a usable site
  `
};

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
            target="_blank"
            rel="noopener"
          >
            Rich Harris
          </Link>
        </Cite>
      </BlockQuote>
    </Fill>
  </Layout>;

NotScrapeable.Props = {
  bgImage: images.nail,
  bgDarken: 0.5,
  notes: `
- To get the style scoping working, a unique identifier/className is generated
- However, this takes away some of the semantic meaning when viewing the compiled version
- I'm not overly concerned about this, but it is worth mentioning
- There are some ways you can guide to generate more human readable class names, but haven't done a ton of research into that
  `
};

export const EditorTooling = () => <Image src={images.editorTooling} />;

EditorTooling.Props = {
  notes: `
- Editor tooling is still in its infancy
- Autocomplete in particular has room for improvement
  `
};

export const EditorToolingPlugin = () =>
  <Image src={images.editorToolingPlugin} />;

EditorToolingPlugin.Props = {
  notes: `
- But it seems like every week there are new developments to get this working as seamlessly as possible
  `
};

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

export const SanitizationConcerns = () =>
  <Heading size={2} caps>
    User input must be sanitized
  </Heading>;

SanitizationConcerns.Props = {
  notes: `
- As with anything, if you're directly injecting user input (even into CSS!) you open yourself up to issues
- Great article on React-Armory that just came out this week, linked to at the end
  `
};

export const PerformanceConcerns = () =>
  <Heading size={2} caps textColor="white">
    Performance
  </Heading>;

PerformanceConcerns.Props = {
  bgImage: images.unsure,
  bgDarken: 0.5,
  notes: `
- This is a big question mark for me currently
- It's something I'd like to investigate for my talk in November
- In general, it seems hard to believe CSS in JS is 1:1 with CSS because of the layers of abstraction/libraries we're adding, but I'm not sure (yet!) if this performance difference is meaningful
- But stay tuned! I'll probably be posting on twitter some findings as I start investigating this
  `
};
