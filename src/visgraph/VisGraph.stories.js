import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import LineChart from './Vis.Line.v1.0.js'
import NetworkChart from './Vis.Network.v1.0.js'
require('../App.css')


storiesOf('VisGraph Charts', module)

  .add('VisGraph Line Chart', () => {
    var data = [
        {x: '2014-06-11', y: 10},
        {x: '2014-06-12', y: 25},
        {x: '2014-06-13', y: 30},
        {x: '2014-06-14', y: 10},
        {x: '2014-06-15', y: 15},
        {x: '2014-06-16', y: 30}
      ];

    return(
      <LineChart width={600} height={300} data={data} />
    );
  })

  .add('VisGraph Network Chart', () => {
    var nodes = [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ];

    // create an array with edges
    var edges = [
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5},
      {from: 3, to: 3}
    ];
    return(
      <NetworkChart width={800} height={800} nodes={nodes} edges={edges} />
    );
  })
  ;
