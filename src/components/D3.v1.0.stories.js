import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BarChart from './D3BarChart.v1.0.js'
import LineChart from './D3LineChart.v1.0.js'


storiesOf('D3 v1.0', module)
    .add('D3 Bar Chart (Mobile)', () => (
        <BarChart onClick={action('clicked')}
             data={[5,10,1,3]}
             width={400}
             height={400}
             />
    ))
    .add('D3 Bar Chart (Desktop)', () => (
        <div style={{width: '100%', height: 700}}>
            <BarChart onClick={action('clicked')}
                data={[5,10,1,3]}
                />
        </div>
    ))
    .add('D3 Line Chart', () => {
      const lineChartData = {
          series1: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
          series2: [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ],
          series3: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
      };
      return (
        <LineChart onClick={action('clicked')}
             data={lineChartData}
             />
      );
    })
    ;
