import React from 'react'
import { Chart } from 'react-google-charts';


export default () => {

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
  }
  ;
