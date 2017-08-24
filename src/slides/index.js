import React from 'react';
import {
  SlideSet,
  Slide
} from 'spectacle';

import * as Intro from './intro/';

export default function makeSlides() {
  return [
    Intro
  ]
    .map((Slides, rootIndex) => {
      return (
        <SlideSet key={rootIndex}>
          {
            Object.keys(Slides)
              .map((key, index) => {
                const Content = Slides[key];
                const iteratorKey = `${rootIndex}-${index}`;
                return (
                  <Slide key={iteratorKey} {...Content.Props}>
                    <Content />
                  </Slide>
                );
              })
          }
        </SlideSet>
      );
    });
}
