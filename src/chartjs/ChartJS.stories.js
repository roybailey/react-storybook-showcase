import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import {
  Line,
  Bar,
  HorizontalBar,
  Pie,
  Doughnut,
  Radar,
  Polar,
  Bubble,
  Scatter
} from 'react-chartjs-2';

import LineChartData from './ChartJS.Line.data.js'
import BarChartData from './ChartJS.Bar.data.js'
import PieChartData from './ChartJS.Pie.data.js'
import PolarChartData from './ChartJS.Polar.data.js'
import RadarChartData from './ChartJS.Radar.data.js'
import BubbleChartData from './ChartJS.Bubble.data.js'
import ScatterChartData from './ChartJS.Scatter.data.js'

import MixedChart from './ChartJS.MixedChart.v1.0.js'
import CrazyChart from './ChartJS.CrazyChart.v1.0.js'


storiesOf('ChartJS Charts', module)
  .add('ChartJS Line', () => (
    <div>
      <h2>Line Example</h2>
      <Line data={LineChartData} />
    </div>
  ))
  .add('ChartJS Bar', () => (
		<div>
			<h2>Bar Example (custom size)</h2>
			<Bar
				data={BarChartData}
				width={400}
				height={300}
				options={{
					maintainAspectRatio: false
				}}
			/>
		</div>
  ))
	.add('ChartJS Horizontal Bar', () => (
		<div>
			<h2>Horizontal Bar Example</h2>
			<HorizontalBar data={BarChartData} />
		</div>
  ))
  .add('ChartJS Pie', () => (
    <div>
      <h2>Pie Example</h2>
      <Pie data={PieChartData} />
    </div>
  ))
  .add('ChartJS Doughnut', () => (
    <Doughnut data={PieChartData} />
  ))
  .add('ChartJS Polar', () => (
		<div>
			<h2>Polar Example</h2>
			<Polar data={PolarChartData} />
		</div>
  ))
  .add('ChartJS Radar', () => (
    <div>
      <h2>Radar Example</h2>
      <Radar data={RadarChartData} />
    </div>
  ))
  .add('ChartJS Bubble', () => (
		<div>
			<h2>Bubble Example</h2>
			<Bubble data={BubbleChartData} />
		</div>
  ))
  .add('ChartJS Scatter', () => (
    <div>
      <h2>Scatter Example</h2>
      <Scatter data={ScatterChartData} />
    </div>
  ))
  .add('ChartJS Mixed Chart', () => (
    <div>
      <h2>Mixed Chart Example</h2>
      <MixedChart />
    </div>
  ))
  .add('ChartJS Crazy Chart', () => (
    <div>
      <h2>Crazy Chart Example</h2>
      <CrazyChart />
    </div>
  ))
  ;
