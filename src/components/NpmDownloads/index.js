import React from 'react';
import { BarChart } from '../';

const data = [
  {
    name: 'styled-components',
    size: 559580
  },
  {
    name: 'glamorous',
    size: 645466
  },
  {
    name: 'emotion',
    size: 24163
  },
  {
    name: 'glamor',
    size: 693107
  },
  {
    name: 'aphrodite',
    size: 141820
  },
  {
    name: 'radium',
    size: 711717
  }
];

export const NpmDownloads = ({ height, width }) => {
  return <BarChart height={height} width={width} data={data} />;
};
