import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import GraphChart1 from './GraphChart.v1.1'
import GraphChart2 from './GraphChart.v2.0'
import graphData from './GraphChart.data.js'
require('../App.css')


storiesOf('D3 Graph Charts', module)
  .add('GraphChart v1 (fixed size 800x800)', () => (
      <GraphChart1 onClick={action('clicked')}
        data={graphData}
        width={800}
        height={800}
        />
  ))
  .add('GraphChart v1 (100%x700)', () => (
    <div style={{width: '100%', height: 700}}>
        <GraphChart1 onClick={action('clicked')}
            data={graphData}
            />
    </div>
  ))
  .add('GraphChart v2 (fixed size 800x800)', () => (
      <GraphChart2 onClick={action('clicked')}
        data={graphData}
        width={800}
        height={800}
        />
  ))
  .add('GraphChart v2 (100%x700)', () => (
    <div style={{width: '100%', height: 700}}>
        <GraphChart2 onClick={action('clicked')}
            data={graphData}
            />
    </div>
  ))
  ;
