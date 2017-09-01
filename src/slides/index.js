import React from 'react';
import { Notes, SlideSet, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import marked from 'marked';

import * as Intro from './intro';
import * as CSSProblems from './css-problems';
import * as Definition from './definition';
import * as Benefits from './benefits';
import * as Libraries from './libraries';
import * as Theming from './theming';
import * as Drawbacks from './drawbacks';
import * as Conclusion from './conclusion';

/*
 * This is pretty dirty... but YOLO
 */
export default function makeSlides() {
  return [
    Intro,
    CSSProblems,
    Definition,
    Benefits,
    Libraries,
    Theming,
    Drawbacks,
    Conclusion
  ].map((Slides, rootIndex) => {
    return (
      <SlideSet key={rootIndex}>
        {Object.keys(Slides).map((key, index) => {
          const Content = Slides[key];
          const Props = Content && Content.Props ? Content.Props : {};
          const iteratorKey = `${rootIndex}-${index}`;
          if (Props.code) {
            const { ranges = [], ...props } = Content.Props;
            return <CodeSlide key={iteratorKey} ranges={ranges} {...props} />;
          }
          return (
            <Slide key={iteratorKey} {...Content.Props || Content.props}>
              <Notes><div dangerouslySetInnerHTML={{ __html: marked((Props.notes || '').trim())}}/></Notes>
              {typeof Content === 'function' && <Content />}
            </Slide>
          );
        })}
      </SlideSet>
    );
  });
}
