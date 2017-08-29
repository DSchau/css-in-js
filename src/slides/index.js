import React from 'react';
import {
  SlideSet,
  Slide
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import * as Intro from './intro/';
import * as Definition from './definition/';
import * as Problems from './problems/';
import * as Libraries from './libraries/';
import * as Conclusion from './conclusion/';

/*
 * This is pretty dirty... but YOLO
 */
export default function makeSlides() {
  return [
    Intro,
    Definition,
    Problems,
    Libraries,
    Conclusion
  ]
    .map((Slides, rootIndex) => {
      return (
        <SlideSet key={rootIndex}>
          {
            Object.keys(Slides)
              .map((key, index) => {
                const Content = Slides[key];
                const iteratorKey = `${rootIndex}-${index}`;
                if (Content.Props && Content.Props.code) {
                  const { ranges = [], ...props } = Content.Props;
                  return <CodeSlide key={iteratorKey} ranges={ranges} {...props} />
                }
                return (
                  <Slide key={iteratorKey} {...Content.Props || Content.props}>
                    {typeof Content === 'function' && <Content />}
                  </Slide>
                );
              })
          }
        </SlideSet>
      );
    });
}
