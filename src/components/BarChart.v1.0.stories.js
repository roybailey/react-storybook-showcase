import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BarChart from './BarChart.v1.0.js'


storiesOf('BarChart', module)
    .add('BarChart (Mobile)', () => (
        <BarChart onClick={action('clicked')}
             data={[5,10,1,3]}
             width={400}
             height={400}
             />
    ))
    .add('BarChart (Desktop)', () => (
        <div style={{width: '100%', height: 700}}>
            <BarChart onClick={action('clicked')}
                data={[5,10,1,3]}
                />
        </div>
    ))
    ;
