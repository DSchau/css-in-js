import React from 'react';
import { BarChart } from '../';

const data = [
  {
    name: 'styled-components',
    size: 9795
  },
  {
    name: 'glamorous',
    size: 2346
  },
  {
    name: 'emotion',
    size: 1532
  },
  {
    name: 'glamor',
    size: 2546
  },
  {
    name: 'radium',
    size: 5618
  },
  {
    name: 'aphrodite',
    size: 3452
  }
];

export const GithubStars = ({ height, width }) => {
  return <BarChart height={height} width={width} data={data} />;
};
