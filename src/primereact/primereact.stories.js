import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import {Button} from 'primereact/components/button/Button';
import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';

import {Chart} from 'primereact/components/chart/Chart';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';

import ProgressBarDemo from './primereact.progress';
import CalendarDemo from './primereact.calendar'


storiesOf('PrimeReact', module)
    .add('PrimeReact Button', () => (
        <div className="App">
            <div>
            <Button label="Simple" onClick={action('clicked')} />
            <Button label="With Icon" icon="fa-check" iconPos="right" onClick={action('clicked')} />
            </div>
        </div>
    ))
    .add('PrimeReact Progress Bar', () => (
        <div className="App">
            <div>
            <ProgressBar value={30}></ProgressBar>
            <ProgressBarDemo></ProgressBarDemo>
            </div>
        </div>
    ))
    .add('PrimeReact Calendar', () => (
        <div className="App">
            <div>
            <CalendarDemo></CalendarDemo>
            </div>
        </div>
    ))
    .add('PrimeReact Chart', () => {
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
                
        var options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
        
        return (
            <div className="App">
                <div>
                <Chart type="line" data={data} options={options}/>
                </div>
            </div>
        )
    })
    ;
