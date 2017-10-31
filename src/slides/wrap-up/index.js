import React from 'react';
import { CodePane, Heading, Fill, Link, Layout } from 'spectacle';
import DownArrow from 'react-icons/lib/fa/arrow-down';

import { Image } from 'components';

const images = {
  wrapUp: require('./assets/images/wrap-up-optimized.jpeg'),
  happy: `https://media.giphy.com/media/44b1ABtsG7VTy/giphy.gif`,
  cssPlayground: require('./assets/images/css-in-js-playground-optimized.png')
};

const snippets = {
  component: require('./assets/snippets/component')
};

export const WrapUpIntro = () =>
  <Heading size={1} fit caps textFont="Bitter">
    Wrap Up
  </Heading>;

WrapUpIntro.Props = {
  bgImage: images.wrapUp,
  bgDarken: 0.4,
  notes: `
So what should we make of all of this?

1. CSS in JS solves very real problems of CSS
1. It does so in a clean, component focused, and developer friendly way
1. ...
1. Profit
  `
};

export const Instructions = () =>
  <Layout>
    <Fill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CodePane
        source={`yarn add styled-components`}
        lang="bash"
        textSize={20}
      />
      <DownArrow color="white" />
      <CodePane source={snippets.component} lang="jsx" textSize={20} />
    </Fill>
  </Layout>;

Instructions.Props = {
  bgColor: 'code',
  notes: `
If I were to give a call to action, or best advice for getting started, I would give this:

1. Start with \`styled-components\` as a starter (or final!) CSS in JS library
  - It tends to be the most approachable as it uses actual CSS syntax, rather than style objects
1. If you're a fan, consider experimenting with other libraries in the ecosystem; who knows, you may like them even more than styled-components!
  `
};

export const Happy = () => null;

Happy.Props = {
  bgImage: images.happy,
  notes: `
Overall, I'm _very_ enthused with the direction that CSS in JS is taking and the things it's doing for the ecosystem. I think it provides very tangible benefits to any application, particularly in the approach it takes to solve some of the problems of CSS *now,* and does so in a way that feels like a real improvement over authoring in CSS.

If I were to start a new project right this moment, I'd author it using one of the CSS in JS libraries we've talked about, and I'd feel very enthused with that direction.
  `
};

export const CSSInJSPlayground = () =>
  <Link
    style={{
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    href="https://css-in-js-playground.com"
    target="_blank"
    rel="noopener"
  >
    <Image src={images.cssPlayground} />
  </Link>;

CSSInJSPlayground.Props = {
  bgColor: 'code',
  width: '100vh',
  height: '100vw',
  notes: `
The React community can certainly inspire what many have called "selection anxiety." The proliferation of libraries, techniques, etc. can make it incredibly hard--especially as a beginner--to know what choice to make, and whether the choice is _most_ correct.

To help alleviate this, I recently created what I'm calling the "CSS in JS Playground," which is a live-editable comparison of some of the most common CSS in JS libraries.

My hope is that this tool will help each of you get a feel for each of the libraries, and hopefully be able to make a more informed decision for what is best for _your_ particular app and use cases.
  `
};
