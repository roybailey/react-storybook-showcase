import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import {Bar, HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

storiesOf('ChartJS Bar v1.0', module)
  .add('ChartJS Bar', () => (
		<div>
			<h2>Bar Example (custom size)</h2>
			<Bar
				data={data}
				width={100}
				height={50}
				options={{
					maintainAspectRatio: false
				}}
			/>
		</div>
  ))
	.add('ChartJS Horizontal Bar', () => (
		<div>
			<h2>Horizontal Bar Example</h2>
			<HorizontalBar data={data} />
		</div>
  ))
  ;
