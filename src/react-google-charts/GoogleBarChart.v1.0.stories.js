import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Chart } from 'react-google-charts';


storiesOf('Google Bar Chart v1.0', module)
  .add('Google Bar Chart', () => {

    const data = [
      ["Element","Density",{"role":"style"}],
      ["Copper",8.94,"#b87333"],
      ["Silver",10.49,"silver"],
      ["Gold",19.3,"gold"],
      ["Platinum",21.45,"color: #e5e4e2"]
    ];
    const options = {
      "title":"Density of Precious Metals, in g/cm^3",
      "bar":{"groupWidth":"95%"},
      "legend":{"position":"none"}
    };
    const chartEvents = [
          {
            eventName: 'select',
            callback(Chart) {
              // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
              const selected = Chart.chart.getSelection();
              console.log('Selected ', JSON.stringify(selected,null,2));
              if(selected.length > 0) {
                console.log(data[selected[0].row+1][0] +' : '+ data[selected[0].row+1][selected[0].column]);
              }
            },
          }
        ];

    //const chartEvents = [];

    return <Chart
         chartType="BarChart"
         chartEvents={chartEvents}
         data={data}
         options={options}
         graph_id="BubbleChart"
         width={'100%'}
         height={'400px'}
         legend_toggle
       />
  })
  ;
