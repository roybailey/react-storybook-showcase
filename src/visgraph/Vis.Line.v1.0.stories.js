import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import LineChart from './Vis.Line.v1.0.js'
require('../App.css')

var data = [
    {x: '2014-06-11', y: 10},
    {x: '2014-06-12', y: 25},
    {x: '2014-06-13', y: 30},
    {x: '2014-06-14', y: 10},
    {x: '2014-06-15', y: 15},
    {x: '2014-06-16', y: 30}
  ];

storiesOf('VisGraph Line Chart v1.0', module)
  .add('VisGraph Line Chart', () => (
    <LineChart width={600} height={300} data={data} />
  ))
  ;
