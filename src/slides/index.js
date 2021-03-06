import React from 'react';
import { Notes, SlideSet, Slide } from 'spectacle';
import CodeSlide from '@dschau/spectacle-code-slide';
import marked from 'marked';
import dasherize from 'lodash.kebabcase';

import * as Intro from './intro';
import * as CSSProblems from './css-problems';
import * as Definition from './definition-and-benefits';
import * as Libraries from './libraries';
import * as RealWorldUsage from './real-world-usage';
import * as Theming from './theming';
import * as Drawbacks from './drawbacks';
import * as WrapUp from './wrap-up';
import * as Conclusion from './conclusion';

/*
 * This is pretty dirty... but YOLO
 * All slides export a function (or an object)
 * This slide fn/obj can contain a property called Props, that is injected
 * into the base level <Slide> component
 */
export default function makeSlides() {
  return [
    Intro,
    CSSProblems,
    Definition,
    Libraries,
    RealWorldUsage,
    Theming,
    Drawbacks,
    WrapUp,
    Conclusion
  ].map((Slides, rootIndex) => {
    return (
      <SlideSet key={rootIndex}>
        {Object.keys(Slides).map((key, index) => {
          const id = dasherize(key);
          const Content = Slides[key];
          const Props = Content && Content.Props ? Content.Props : {};
          const iteratorKey = `${rootIndex}-${index}`;
          if (Props.code) {
            const { ranges = [], ...props } = Content.Props;
            return (
              <CodeSlide id={id} key={iteratorKey} ranges={ranges} {...props} />
            );
          }
          return (
            <Slide
              id={id}
              key={iteratorKey}
              {...Content.Props || Content.props}
            >
              <Notes>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked((Props.notes || '').trim())
                  }}
                />
              </Notes>
              {typeof Content === 'function' && <Content />}
            </Slide>
          );
        })}
      </SlideSet>
    );
  });
}
