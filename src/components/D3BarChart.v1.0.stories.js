import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BarChart from './D3BarChart.v1.0.js'


storiesOf('D3 Bar Chart', module)
    .add('D3 Bar Chart (Mobile)', () => (
        <BarChart onClick={action('clicked')}
             data={[5,10,1,3]}
             width={400}
             height={400}
             />
    ))
    .add('D3 Bar Chart (Desktop)', () => (
        <div style={{width: '100%', height: 700}}>
            <BarChart onClick={action('clicked')}
                data={[5,10,1,3]}
                />
        </div>
    ))
    ;
