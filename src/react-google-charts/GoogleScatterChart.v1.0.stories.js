import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Chart } from 'react-google-charts';


storiesOf('Google Scatter Chart v1.0', module)
  .add('Simple Scatter Chart', () => (
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
  .add('Google Scatter Chart', () => {

    const options = {
       title: 'Age vs. Weight comparison',
       hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
       vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
       legend: 'none',
     };
     const rows = [
       [8, 12],
       [4, 5.5],
       [11, 14],
       [4, 5],
       [3, 3.5],
       [6.5, 7],
     ];
     const columns = [
       {
         type: 'number',
         label: 'Age',
       },
       {
         type: 'number',
         label: 'Weight',
       },
     ];

    return <Chart
         chartType="ScatterChart"
         rows={rows}
         columns={columns}
         options={options}
         graph_id="ScatterChart"
         width={'100%'}
         height={'400px'}
         legend_toggle
       />
  })
  ;
