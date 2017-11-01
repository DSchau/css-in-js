import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  CodePane,
  Heading,
  Fill,
  Layout,
  Link,
  S as Span
} from 'spectacle';

import Person from 'emojione/assets/svg/1f3c3-1f3fb.svg';
import PersonThinking from 'emojione/assets/svg/1f914.svg';

import { Button, ButtonLink, Image, QuoteSlide } from 'components';

const images = {
  cssProblems: require('./assets/images/css-problems-optimized.jpeg'),
  dodds: require('./assets/images/kent-c-dodds-optimized.jpeg'),
  namingIsHard: require('./assets/images/naming-is-hard-optimized.jpeg'),
  hardStuff: require('./assets/images/hard-stuff-optimized.jpeg'),
  cssModules: require('./assets/images/css-modules-optimized.png'),
  shadowDom: require('./assets/images/shadow-dom-optimized.jpeg'),
  shadowDomCanIUse: require('./assets/images/shadow-dom-can-i-use-optimized.png'),
  scale: require('./assets/images/scale-optimized.jpeg'),
  deadCodeElimination: require('./assets/images/dead-code-elimination-optimized.jpeg'),
  sharingConstants: require('./assets/images/sharing-constants-optimized.jpeg'),
  cssProblemsVjeux: require('./assets/images/vjeux-problems-optimized.png')
};

const snippets = {
  cssOne: require('./assets/snippets/button-1.css'),
  cssTwo: require('./assets/snippets/button-2.css'),
  cssThree: require('./assets/snippets/button-3.css'),
  cssFour: require('./assets/snippets/button-4.css'),
  buttonLink: require('./assets/snippets/button-link.html'),
  cssFive: require('./assets/snippets/button-5.css'),
  cssSix: require('./assets/snippets/button-6.css'),
  bem: require('./assets/snippets/bem.css'),
  bemHtml: require('./assets/snippets/bem.html'),
  cssConstant: require('./assets/snippets/button-constant.css'),
  jsConstant: require('./assets/snippets/button-constant.js')
};

export const TheProblems = () =>
  <Heading size={1} fit caps textFont="Bitter">
    The problems with CSS
  </Heading>;

TheProblems.Props = {
  bgImage: images.cssProblems,
  bgDarken: 0.5,
  notes: `
Let's start with a brief discussion of some of the problems of CSS. An important caveat here, these problems tend to be focused on real-world examples that every-day developers have run into, or have run into without even realizing it and resorting to hack-y work arounds. This is not to say that problems "at scale" are not important, but if we can narrow the scope to problems that every-day developers, and myself, have faced, we can more clearly define the problems in more approachable terms and concepts. In illustrating these real-world problems, the foundational basis for the creation of these CSS in JS techniques will be made evident.
  `
};

export const FirstButton = () => {
  return (
    <div>
      <Button
        backgroundColor="#3ecf8e"
        color="white"
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssOne} textSize={18} />
    </div>
  );
};

FirstButton.Props = {
  bgColor: 'code',
  notes: `

For these first examples, let's say that we're a team of front-end developers working on a component library to be used throughout a company's internal application suite. We get business requirements from users and they're filtered through our UX department, who weeds these out and gives us the truly important requirements.

Our first task from the UX team to design a button component that has a hover state and raises slightly on hover. We design and build this with vanilla CSS and HTML. This button looks great, meets every current need we have, and the code is quite succinct, to boot. This is a _great_ component!
  `
};

export const SecondButton = () => {
  return (
    <div>
      <Button
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssTwo} textSize={24} />
    </div>
  );
};

SecondButton.Props = {
  bgColor: 'code',
  notes: `
Our UX team makes another request of our team. We now need a secondary style, and the previous button will be considered the primary style. So&hellip; we add this secondary class, we complete the objective, and we're still feeling fairly good about our button component.
  `
};

export const ThirdButton = () => {
  return (
    <div>
      <Button
        fontSize="1rem"
        textTransform="lowercase"
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssThree} textSize={24} />
    </div>
  );
};

ThirdButton.Props = {
  bgColor: 'code',
  notes: `
We get another request that the button is far too large for certain applications, and the request has been made that we add a button with reduced padding, font-size, etc so more can be displayed on screen. We add this \`tiny\` class, and we complete the business requirements. This is fine&hellip;
  `
};

export const FourthButton = () => {
  return (
    <div>
      <Button
        fontSize="1rem"
        textTransform="lowercase"
        backgroundHoverColor="#7795f8"
        hoverColor="white"
        style={{
          marginBottom: 20
        }}
      >
        Ooooh-wee. Look at me!
      </Button>
      <CodePane lang="css" source={snippets.cssFour} textSize={24} />
    </div>
  );
};

FourthButton.Props = {
  bgColor: 'code',
  notes: `
We get a final request that the button neds to a have a hover state for accessibility and more intuitive feedback on desktop screens. We add this class, and our button is "completed," for now. This is _not_ fine 😫
  `
};

export const TheGlobals = {
  Props: {
    bgColor: 'code',
    code: [
      snippets.cssOne,
      snippets.cssTwo,
      snippets.cssThree,
      snippets.cssFour
    ].join('\n'),
    lang: 'css',
    ranges: [
      { title: 'Our clean CSS', loc: [0, 0] },
      { loc: [13, 14], title: '...is no so longer so clean' },
      { loc: [17, 18] },
      { loc: [22, 23] },
      { loc: [27, 28] },
      { title: 'Globals!', loc: [0, 0] }
    ],
    showLineNumbers: false,
    style: {
      fontSize: 24
    },
    notes: `
Check out the [code slide here](https://css-in-js.dustinschau.com/#/the-globals)

Our clean, pristine button component and CSS are no longer so clean. Each of these simple requests stack and increase the complexity of the component.

In effect, we've introduced a number of CSS globals. As anyone is aware, globals are a common enemy of any codebase, and the introduction of globals will make this CSS harder to maintain, use, and develop against. This is especially evident if designing something like a component library, where hundreds of other developers in our company will use this button, extend upon it, and introduce their own globals. It's incredibly easy to imagine a scenario where collision occurs and this practice makes this approach untenable.
  `
  }
};

export const GlobalProblems = class extends Component {
  state = {
    clicks: 0
  };

  render() {
    const style =
      this.state.clicks > 0
        ? {
            color: this.state.clicks === 1 ? 'white' : 'blue',
            backgroundColor: this.state.clicks === 1 ? 'blue' : 'white'
          }
        : {};
    return (
      <div onClick={() => this.setState({ clicks: this.state.clicks + 1 })}>
        <ButtonLink href="https://google.com" {...style}>
          Click me to do something wicked awesome
        </ButtonLink>
        <CodePane
          lang="html"
          source={snippets.buttonLink.replace(
            /(secondary)/,
            this.state.clicks > 1 ? '$1 inverted' : '$1'
          )}
          textSize={20}
        />
        <Appear>
          <CodePane lang="css" source={snippets.cssFive} textSize={20} />
        </Appear>
        <Appear>
          <CodePane lang="css" source={snippets.cssSix} textSize={20} />
        </Appear>
      </div>
    );
  }
};

GlobalProblems.Props = {
  bgColor: 'code',
  notes: `
  Let's consider the usage of this button component by a developer who comes on the project long down the road, far after the team that designed the component has left for greener pastures. This developer is relatively inexperienced, and is just trying to add in style that makes a link look like a button. This seemingly simple task is more complicated than it appears at first glance. These globals make the job _far_ more diffiult than expected, and the developer resorts to messy hacks and the use of \`!important\` in an effort to ship and meet a deadline.
  `
};

export const ButWait = () =>
  <Heading size={1} fit caps>
    But Wait&hellip;
  </Heading>;

ButWait.Props = {
  notes: `
But wait&hellip; we've invented techniques to solve these problems!
  `
};

export const Bem = () =>
  <Layout>
    <Fill>
      <CodePane lang="css" source={snippets.bem} textSize={20} />
    </Fill>
    <Fill>
      <CodePane lang="html" source={snippets.bemHtml} textSize={20} />
    </Fill>
  </Layout>;

Bem.Props = {
  bgColor: 'code',
  notes: `
CSS naming methodologies like BEM exist to solve this exact problem re: name collision and CSS globals. Also consider other solutions like Atomic CSS, OOCSS, SMACSS, SUITCSS, Object-oriented CSS, etc.
  `
};

export const Run = class extends React.Component {
  state = {
    flipped: false
  };

  render() {
    const props = {
      height: 256,
      width: 256,
      ...(this.state.flipped
        ? {
            transform: `scale(-1, 1)`
          }
        : {})
    };
    return (
      <Person
        onClick={() => this.setState({ flipped: !this.state.flipped })}
        {...props}
      />
    );
  }
};

Run.Props = {
  notes: `
I am very much not a fan of these methodologies. They introduce cognitive overhead and introduce naming concerns. Is this particular thing a modifier? An element? A block? Naming is already notoriously hard; this technique certainly does solve the class name collision problem, but I contend it imposes extraneous concerns on behalf of the developer that can be solved in other, cleaner ways (as we'll see soon).
  `
};

export const NamingIsHardImage = () =>
  <div>
    <Image src={images.namingIsHard} style={{ maxHeight: 500 }} />
    <Heading size={6} textColor="secondary" textSize={14}>
      Jeremy Thomas (@jgthms)
    </Heading>
  </div>;

NamingIsHardImage.Props = {
  bgColor: 'white',
  notes: `
This pie chart by [Jeremy Thomas](https://twitter.com/jgthms) perfectly encapsulates the issue. Naming is an unnecessary cognitive strain on the process of writing CSS. It does not have to be!
  `
};

export const HardStuff = () =>
  <QuoteSlide
    quote={require('./assets/quotes/automation.raw')}
    image={images.dodds}
    author="Kent C. Dodds"
    to="https://twitter.com/kentcdodds/status/899709586663452672"
  />;

HardStuff.Props = {
  bgImage: images.hardStuff,
  bgDarken: 0.75,
  notes: `
Consider this quote by Kent C. Dodds. Why would we not use tooling to automate trivial naming concerns? Development is oftentimes all about automating hard problems, and is naming not one of the most (unecessarily) difficult ones we face?
  `
};

export const Alternatives = () =>
  <Layout>
    <Fill>
      <Image src={images.cssModules} />
    </Fill>
    <Fill>
      <Image src={images.shadowDom} />
    </Fill>
  </Layout>;

Alternatives.Props = {
  bgColor: 'secondary',
  notes: `
But others still will note that this problem of globals has been solved with tooling in other areas. CSS Modules and Shadow DOM (a staged spec introduced in web components to isolate styling to a particular subset of the DOM) _both_ are intended to solve this problem.

CSS Modules is an implementation of CSS in JS, so if you leave here with nothing else, consider integrating CSS Modules support into your application. It'll generate a unique hash based on a user supplied class name. Shadow modules are similarly going to be great, but I'm not quite sure they're ready for primetime yet (nor are web components _quite_ there in my opinion).
  `
};

export const ShadowDomSupport = class extends Component {
  state = {
    clicked: false
  };
  render() {
    return (
      <div onClick={() => this.setState({ clicked: true })}>
        <Image src={images.shadowDomCanIUse} />
        {this.state.clicked &&
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: `translateY(-50%)`
            }}
          >
            <PersonThinking height={256} width={256} />
          </div>}
      </div>
    );
  }
};

ShadowDomSupport.Props = {
  notes: `
Shadow DOM, and web components as a whole, are certainly something that I think will continue to grow in popularity in the coming months and years. That said, the web component implementations are still slightly in flux, and for full browser support, you'll certainly have to ship a polyfill.
  `
};

export const ItDoesNotScale = () =>
  <Heading size={1} caps>
    CSS Does <Span type="underline">Not</Span> Scale
  </Heading>;

ItDoesNotScale.Props = {
  bgImage: images.scale,
  bgDarken: 0.5,
  notes: `
The bigger your application gets (and the more CSS you write), the more globals you will create which is quite simply making your application harder to maintain and use. In order to work around these scaling issues, naming strategies or tools--LESS, SASS, etc.--are often utilized.

CSS in JS solves this problems cleanly, clearly, and simply.

Also I'd like to note here that, in general, I tend to think "does not scale," is a perjorative used by people who are just not fans of that particular technology. That is not the case here though, as most advocates of CSS in JS _love_ CSS. You'll also see soon that when you're writing CSS in JS, you're using all the functionality that we know and love in CSS.
  `
};

export const DeadCodeElimination = () =>
  <Heading size={1} caps>
    Dead code Elimination
  </Heading>;

DeadCodeElimination.Props = {
  bgImage: images.deadCodeElimination,
  bgDarken: 0.5,
  notes: `
Your class names and styles (i.e. \`.css\` files) are separately located to what is being styled, typically JSX with \`className\` or in non-React projects, as separate HTML files. Additionally, as previously mentioned, as CSS is global by default, your styles could be styling unrelated functionality in your application. Jointly, these two concerns make it incredibly difficult to re-factor unused CSS.

Removing styles can be a spooky endeavour 👻, and many regression tests, QA, or manual testing is often required to validate with certainty that only certain functionality was impacted. Each of these techniques requires manual testing and validation, and is not something that every developer has available to them.

CSS in JS gives you confidence that by removing this particular component, you're removing style code applicable to this component _only_.
  `
};

export const SharingConstants = () =>
  <Heading size={1} caps>
    Sharing Constants
  </Heading>;

SharingConstants.Props = {
  bgImage: images.sharingConstants,
  bgDarken: 0.5,
  notes: `
Theming, stylistic concerns (e.g. padding, line-height, etc.), and other possibly shared constants are a natural and intuitive fit to be colocated within your JavaScript. Want to re-use that branding color in your header for a button? Sure makes sense to share that with your CSS and JS. Media query breakpoints? Another intuitive and obvious fit.
  `
};

export const SharingConstantsExample = () =>
  <Layout>
    <Fill>
      <CodePane lang="css" source={snippets.cssConstant} textSize={20} />
    </Fill>
    <Fill>
      <CodePane lang="js" source={snippets.jsConstant} textSize={20} />
    </Fill>
  </Layout>;

SharingConstantsExample.Props = {
  bgColor: 'code',
  notes: `
Oftentimes, I know I've needed to share things like colors, breakpoints, etc. between my CSS and JavaScript. I've oftentimes resorted to using a brittle build process, which inevitably can fall out of sync or require tweaks at some later point.

Why not use one source of truth for all application constants, and why not make that source of truth a JavaScript file with CSS in JS? Sure makes sense to me!
  `
};

export const FacebookProblems = () =>
  <div>
    <Image src={images.cssProblemsVjeux} style={{ maxHeight: 500 }} />
    <Heading size={6} textColor="white" textSize={14}>
      Christopher Chedeau (@vjeux)
    </Heading>
  </div>;

FacebookProblems.Props = {
  bgColor: 'black',
  notes: `
Much credit where credit is due, many of these problems were identified in a formative CSS in JS presentation by [Christopher Chedeau](https://twitter.com/vjeux) (a developer at Facebook), who delivered a great presentation highlighting many of these issues way back in 2014!
  `
};
