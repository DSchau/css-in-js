import React from 'react';
import { BarChart } from '../';

const data = [
  {
    name: 'styled-components',
    size: 356408
  },
  {
    name: 'glamorous',
    size: 236465
  },
  {
    name: 'emotion',
    size: 12704
  },
  {
    name: 'glamor',
    size: 313051
  },
  {
    name: 'aphrodite',
    size: 98360
  },
  {
    name: 'radium',
    size: 268412
  }
];

export const NpmDownloads = ({ height, width }) => {
  return <BarChart height={height} width={width} data={data} />;
};
