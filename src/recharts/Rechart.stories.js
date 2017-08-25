import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { ScatterChart, Scatter } from 'recharts';

import PercentageAreaChart from './Rechart.PercentageArea.js';

require('../App.css')


const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data01 = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
                  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
                  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];
const data02 = [{x: 200, y: 260, z: 240}, {x: 240, y: 290, z: 220},
                  {x: 190, y: 290, z: 250}, {x: 198, y: 250, z: 210},
                  {x: 180, y: 280, z: 260}, {x: 210, y: 220, z: 230}];


storiesOf('Rechart Charts', module)
  .add('Rechart Line Chart', () => (
    <LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  ))
  .add('Rechart Bar Chart', () => (
    <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey="name"/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="pv" fill="#8884d8" />
     <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  ))
  .add('Rechart Stacked Area', () => (
    <AreaChart width={600} height={400} data={data}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
      <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
      <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
    </AreaChart>
  ))
  .add('Rechart Percentage Area', PercentageAreaChart)
  .add('Rechart Scatter Area', () => (
    <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <XAxis dataKey={'x'} name='stature' unit='cm'/>
      <YAxis dataKey={'y'} name='weight' unit='kg'/>
      <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='km'/>
      <CartesianGrid />
      <Tooltip cursor={{strokeDasharray: '3 3'}}/>
      <Legend/>
      <Scatter name='A school' data={data01} fill='#8884d8' shape="star"/>
      <Scatter name='B school' data={data02} fill='#82ca9d' shape="triangle"/>
    </ScatterChart>
  ))
  ;
