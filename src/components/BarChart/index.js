import React from 'react';
import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import { AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { scaleBand, scaleLinear } from '@vx/scale';
import { TextOutline } from '@vx/text';
import { extent, max } from 'd3-array';
import { darken, lighten, rgba } from 'polished';

import { getColorFromString, PRIMARY, SECONDARY } from 'style';

export const BarChart = ({
  data = [],
  height = window.innerHeight / 1.5,
  width = window.innerWidth / 1.15
}) => {
  if (width < 10) return null;

  const libraries = data.map(({ name }) => name);

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  // accessors
  const x = d => d.name;
  const y = d => +d.size * 100;

  // bounds
  const xMax = width;
  const yMax = height - 120;

  // scales
  const xScale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.4
  });

  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, max(data, y)]
  });

  return (
    <svg width={width} height={height}>
      <LinearGradient id="bg" from={lighten(0.15, SECONDARY)} to={SECONDARY} />
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
                y={yMax - barHeight + 2}
                fill={getColorFromString(d.name, 85, 50)}
                data={{ x: x(d), y: y(d) }}
              />
              <TextOutline
                fontSize={24}
                x={xScale(x(d)) + xScale.bandwidth() / 2}
                y={yMax - barHeight}
                textAnchor={'middle'}
                fill={'white'}
                outlineStroke={`rgba(0, 0, 0, 1)`}
                outlineStrokeWidth={4}
                fontFamily={'Roboto Mono'}
              >
                {d.size}
              </TextOutline>
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
          <text
            fill="#fff"
            fontSize={Math.round(Math.sqrt(width) / 2)}
            textAnchor="middle"
          />
        }
      />
    </svg>
  );
};
