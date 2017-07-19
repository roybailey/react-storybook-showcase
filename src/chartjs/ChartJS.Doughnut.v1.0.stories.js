import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

storiesOf('ChartJS Doughnut v1.0', module)
  .add('ChartJS Doughnut', () => (
    <Doughnut data={data} />
  ))
  ;
