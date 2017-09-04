import React from 'react';
import { BarChart } from '../';

const data = [
  {
    name: 'styled-components',
    size: 39
  },
  {
    name: 'glamorous',
    size: 25
  },
  {
    name: 'emotion',
    size: 11
  },
  {
    name: 'glamor',
    size: 16
  },
  {
    name: 'cxs',
    size: 1.2
  }
];

export const LibraryPayload = ({ height, width }) => {
  return <BarChart height={height} width={width} data={data} />;
};
