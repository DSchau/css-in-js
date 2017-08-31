import React from 'react';
import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import { AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { scaleBand, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';
import { darken, lighten, rgba } from 'polished';

import { PRIMARY, SECONDARY } from 'style';

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

const libraries = data.map(({ name }) => name);

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// accessors
const x = d => d.name;
const y = d => +d.size * 100;

export const LibraryPayload = ({
  height = window.innerHeight / 1.5,
  width = window.innerWidth / 1.25
}) => {
  if (width < 10) return null;

  // bounds
  const xMax = width;
  const yMax = height - 120;

  // scales
  const xScale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, max(data, y)],
  });

  return (
    <svg width={width} height={height}>
      <LinearGradient id="bg" from={PRIMARY} to={darken(0.15, PRIMARY)}/>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={`url(#bg)`}
        rx={14}
      />
      <Group top={40}>
        {data.map((d, i) => {
          const barHeight = yMax - yScale(y(d));
          return (
            <Group key={`bar-${x(d)}`}>
              <Bar
                width={xScale.bandwidth()}
                height={barHeight}
                x={xScale(x(d))}
                y={yMax - barHeight}
                fill={rgba(lighten(0.2, PRIMARY), 0.7)}
                data={{ x: x(d), y: y(d) }}
              />
            </Group>
          );
        })}
      </Group>
      <AxisBottom
        scale={xScale}
        top={yMax + 40}
        stroke="#fff"
        tickStroke="#fff"
        tickLabelComponent={
          <text fill="#fff" fontSize={16} textAnchor="middle" />
        }
      />
    </svg>
  );
}