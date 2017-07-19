import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import {Polar} from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};


storiesOf('ChartJS Polar v1.0', module)
  .add('ChartJS Polar', () => (
		<div>
			<h2>Polar Example</h2>
			<Polar data={data} />
		</div>
  ))
  ;
