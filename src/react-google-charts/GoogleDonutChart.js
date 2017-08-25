import React from 'react'
import { Chart } from 'react-google-charts';


export default () => {

    const data = [["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]];
    const options = {"title":"My Daily Activities","pieHole":0.4,"is3D":true};

    return <Chart
         chartTitle="DonutChart"
         chartType="PieChart"
         data={data}
         options={options}
         graph_id="DonutChart"
         width={'100%'}
         height={'400px'}
         legend_toggle
       />
  }
  ;
