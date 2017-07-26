import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import NetworkChart from './Vis.Network.v1.0.js'


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

storiesOf('VisGraph Network Chart v1.0', module)
  .add('VisGraph Network Chart', () => (
    <NetworkChart width={800} height={800} nodes={nodes} edges={edges} />
  ))
  ;
