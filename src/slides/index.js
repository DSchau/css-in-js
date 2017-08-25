import React from 'react';
import {
  SlideSet,
  Slide
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import * as Intro from './intro/';
import * as Problems from './problems/';
import * as Conclusion from './conclusion/';

export default function makeSlides() {
  return [
    Intro,
    Problems,
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
                console.log(Content);
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
