import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Chart } from 'react-google-charts';

import GoogleLineChart from './GoogleLineChart.js'
import GoogleBarChart from './GoogleBarChart.js'
import GoogleDonutChart from './GoogleDonutChart.js'
import GoogleBubbleChart from './GoogleBubbleChart.js'
import GoogleScatterChart from './GoogleScatterChart.js'
import GoogleTreeMapChart from './GoogleTreeMapChart.js'
import GoogleGanttChart from './GoogleGanttChart.js'


storiesOf('Google Charts', module)
  .add('Google Line Chart', GoogleLineChart)
  .add('Google Bar Chart', GoogleBarChart)
  .add('Google Donut Chart', GoogleDonutChart)
  .add('Google Bubble Chart', GoogleBubbleChart)
  .add('Google Scatter Chart (simple)', () => (
    <Chart
      chartType="ScatterChart"
      data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
      options={{}}
      graph_id="ScatterChart"
      width="100%"
      height="400px"
      legend_toggle
    />
  ))
  .add('Google Scatter Chart', GoogleScatterChart)
  .add('Google TreeMap Chart', GoogleTreeMapChart)
  .add('Google Gantt Chart', GoogleGanttChart)
  ;
