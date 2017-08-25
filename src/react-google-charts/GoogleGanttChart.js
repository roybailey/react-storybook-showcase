import React from 'react'
import { Chart } from 'react-google-charts';


export default () => {

    const options = {};
    const columns = [
      {"id":"Task ID","type":"string"},
      {"id":"Task Name","type":"string"},
      {"id":"Start Date","type":"date"},
      {"id":"End Date","type":"date"},
      {"id":"Duration","type":"number"},
      {"id":"Percent Complete","type":"number"},
      {"id":"Dependencies","type":"string"}];
    const rows = [
      ["Research","Find sources",new Date("2015-01-01T00:00:00.000Z"),new Date("2015-01-05T00:00:00.000Z"),null,100,null],
      ["Write","Write paper",null,new Date("2015-01-09T00:00:00.000Z"),259200000,25,"Research,Outline"],
      ["Cite","Create bibliography",null,new Date("2015-01-07T00:00:00.000Z"),86400000,20,"Research"],
      ["Complete","Hand in paper",null,new Date("2015-01-10T00:00:00.000Z"),86400000,0,"Cite,Write"],
      ["Outline","Outline paper",null,new Date("2015-01-06T00:00:00.000Z"),86400000,100,"Research"]
    ];
    const chartPackages = ["gantt"];

    return <Chart
         chartType="Gantt"
         chartPackages={chartPackages}
         rows={rows}
         columns={columns}
         options={options}
         graph_id="GanttChart"
         width={'100%'}
         height={'400px'}
         legend_toggle
       />
  }
  ;
