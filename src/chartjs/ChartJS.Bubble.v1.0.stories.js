import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import {Bubble} from 'react-chartjs-2';

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'Bubble Dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{x:10,y:20,r:5}, {x:15,y:5,r:10}, {x:20,y:15,r:15}]
    }
  ]
};


storiesOf('ChartJS Bubble v1.0', module)
  .add('ChartJS Bubble', () => (
		<div>
			<h2>Bubble Example</h2>
			<Bubble data={data} />
		</div>
  ))
  ;
