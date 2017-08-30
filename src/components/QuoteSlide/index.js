import React, { Component } from 'react';
import {
  BlockQuote,
  Cite,
  Fill,
  Image,
  Layout,
  Quote as QuoteComponent
} from 'spectacle';

const Author = ({ author, to }) => {
  return (
    <Cite>
      {author}
    </Cite>
  );
};

const Quote = ({ quote, ...rest }) =>
  <BlockQuote>
    <QuoteComponent
      textColor="white"
      borderLeft="1px solid white"
      style={{
        lineHeight: 1.25
      }}
      {...rest}
    >
      {quote}
    </QuoteComponent>
    <Author {...rest} />
  </BlockQuote>;

export class QuoteSlide extends Component {
  render() {
    const { image, ...rest } = this.props;
    if (!image) {
      return <Quote textSize={40} {...rest} />;
    }
    return (
      <Layout>
        <Fill style={{ display: 'flex', maxWidth: '50%' }}>
          <Image
            src={image}
            style={{ height: 300, width: 300, borderRadius: 300 }}
          />
        </Fill>
        <Fill style={{ display: 'flex', alignItems: 'center' }}>
          <Quote textSize={32} {...rest} />
        </Fill>
      </Layout>
    );
  }
}
