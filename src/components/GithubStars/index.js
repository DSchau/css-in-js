import React from 'react';
import { BarChart } from '../';

const data = [
  {
    name: 'styled-components',
    size: 10950
  },
  {
    name: 'glamorous',
    size: 2614
  },
  {
    name: 'emotion',
    size: 2062
  },
  {
    name: 'glamor',
    size: 2669
  },
  {
    name: 'radium',
    size: 5752
  },
  {
    name: 'aphrodite',
    size: 3618
  }
];

export const GithubStars = ({ height, width }) => {
  return <BarChart height={height} width={width} data={data} />;
};
