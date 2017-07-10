import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import GraphChart from './GraphChart.v1.0'
import graphData from './GraphChart.data.js'
require('../App.css')


storiesOf('GraphChart v1.0', module)
  .add('GraphChart fixed size 800x800', () => (
      <GraphChart onClick={action('clicked')}
        data={graphData}
        width={800}
        height={800}
        />
  ))
  .add('GraphChart 100%x700', () => (
    <div style={{width: '100%', height: 700}}>
        <GraphChart onClick={action('clicked')}
            data={graphData}
            />
    </div>
  ))
  ;
