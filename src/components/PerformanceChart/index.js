import React from 'react';
import { BarChart } from '../';

const data = [
  {
    name: 'styled-components',
    size: 103.35
  },
  {
    name: 'glamorous',
    size: 183.76
  },
  {
    name: 'emotion',
    size: 141.88
  },
  {
    name: 'radium',
    size: 81.07
  },
  {
    name: 'aphrodite',
    size: 38.75
  },
  {
    name: 'inline styles',
    size: 27.55
  }
];

export const PerformanceChart = ({ height, width }) => {
  return <BarChart height={height} width={width} data={data} />;
};
