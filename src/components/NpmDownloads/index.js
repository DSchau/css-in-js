import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import { Group } from '@vx/group';
import { LinePath } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { genDateValue } from '@vx/mock-data';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';

function genLines(num) {
  return new Array(num).fill(1).map(() => {
    return genDateValue(25);
  });
}

const series = genLines(12);
const data = series.reduce((rec, d) => {
  return rec.concat(d);
}, []);

// accessors
const x = d => d.date;
const y = d => d.value;

export class NpmDownloads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statistics: []
    };
  }

  async componentDidMount() {
    // const { libraries = [] } = this.props;
    // const statistics = await Promise.all(
    //   libraries
    //     .map(library =>
    //       fetch(`https://api.npms.io/v2/package/${library}?url=http://api.npms.io/v2/package/${library}`)
    //         .then(response => response.json())
    //     )
    // )
    //   .then(all => {
    //     return all
    //       .map(({ collected }) => ({
    //         metadata: collected.metadata,
    //         data: collected.npm
    //       }))
    //   });
    // this.setState({
    //   statistics
    // });
  }

  render() {
    const {
      height = window.innerHeight / 1.5,
      width = window.innerWidth / 1.5
    } = this.props;
    const xMax = width;
    const yMax = height / 8;

    // scales
    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(data, x)
    });
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(data, y)]
    });

    return (
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="#242424"
          rx={14}
        />
        {series.map((d, i) => {
          const offset = i * yMax / 2;
          const curve = i % 2 == 0 ? curveMonotoneX : undefined;
          return (
            <Group key={`lines-${i}`} top={offset}>
              <LinePath
                data={d}
                xScale={xScale}
                yScale={yScale}
                x={x}
                y={y}
                stroke="#ffffff"
                strokeWidth={1}
                curve={curve}
              />
            </Group>
          );
        })}
      </svg>
    );
  }
}
