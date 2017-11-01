import React from 'react';
import { BlockQuote, Cite, Heading, Fill, Layout, Link, Text } from 'spectacle';
import GlobeIcon from 'react-icons/lib/fa/globe';

import { Image, QuoteSlide, PerformanceChart } from 'components';

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

export const DrawbacksIntro = () =>
  <Heading size={1} textFont="Bitter" caps>
    Drawbacks
  </Heading>;

DrawbacksIntro.Props = {
  bgImage: images.drawbacks,
  bgDarken: 0.3,
  notes: `
However, there aren't any silver bullets it seems in frontend web technology. While CSS in JS may seem like a great fit for most applications, there are certainly some drawbacks that are worth considering.
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
When JavaScript is disabled (still can be a concern!), how do we progressively enhance? If JavaScript is our styling and rendering solution, we're serving effectively an unstyled mess of content, which goes directly contrary to the ideas of progressive enhancement.

0.2% of users may not seem like much, but if you're Facebook scale or driving a lot of traffic it's a concern

- 1,000,000 monthly users means 2,000 users may not be getting a usable site

How can we fix this?

You can mitigate with server side rendering (something like next would be terrific) or statically rendering to HTML (with something like Gatsby)
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
Rich Harris, creator of such tools as Rollup, Buble, Svelte, etc. raises an interesting point. Not only are the styles not scrapeable, but the styles can be hard to query, as well. Things like e2e tests or integration tests should not be pointed to a unique hash, and so it's certainly a best practice to either use one of the existing babel plugins for most libraries that adds a humanized class name, or manually add your own!
  `
};

export const EditorTooling = () => <Image src={images.editorTooling} />;

EditorTooling.Props = {
  notes: `
Editor tooling is still in its infancy, but as CSS in JS continues to grow in popularity, I think we'll see marked improvement on this front.
  `
};

export const EditorToolingPlugin = () =>
  <Image src={images.editorToolingPlugin} />;

EditorToolingPlugin.Props = {
  notes: `
It seems like every week there are new developments to get this working as seamlessly as possible. I believe this to be a space that will continue to see rapid improvements.
  `
};

export const SanitizationConcerns = () =>
  <Heading size={2} caps>
    User input must be sanitized
  </Heading>;

SanitizationConcerns.Props = {
  notes: `
As with anything, if you're directly injecting user input (even into CSS!) you open yourself up to issues

_Check out this [great article](https://reactarmory.com/answers/how-can-i-use-css-in-js-securely) from React Armory_
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
Performance can be a concern, but I'd urge you here to not prematurely optimize. The difference between each of the libraries is arguably minimal, and the difference between CSS is relatively minimal as well.

However, if you're pushing Facebook-scale™, or after measuring your application's performance, then it may be worth re-visiting whether these libraries are for you, or whether there are performance optimizations you can make to improve perf.
  `
};

export const PerformanceChartExample = () =>
  <div>
    <PerformanceChart />
    <Link
      textColor="white"
      href="https://github.com/A-gambit/CSS-IN-JS-Benchmarks"
      target="_blank"
      rel="noopener"
    >
      <GlobeIcon color="white" /> Benchmark
    </Link>
  </div>;

PerformanceChartExample.Props = {
  bgColor: 'secondary',
  notes: `
This benchmark measures the mount time of various CSS in JS libraries vs. inline styles (i.e. without a library).

Any benchmark should be taken with a grain of salt. It is _incredibly_ difficult to measure real-world performance, so most resort to doing large-scale operations (e.g. rendering a listview with thousands of rows, re-rendering a large table, etc.), which are generally not at all indicative of the type of application most are building.

They can be helpful to get a general idea for performance, these are not necessarily what you'll see in real world applications. 
  `
};
