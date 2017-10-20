import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import SortableContainer from './SortableHoc.Container.v1.0.js'
//import 'semantic-ui/dist/semantic.min.css'


const data = [
 {
   header: 'Project Report - January',
   description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
   meta: 'ROI: 30%',
   status: 'red'
 },
 {
   header: 'Project Report - May',
   description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
   meta: 'ROI: 34%',
   status: 'orange'
 },
 {
   header: 'Project Report - October',
   description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
   meta: 'ROI: 27%',
   status: 'green'
 },
];


storiesOf('react-sortable-hoc', module)
  .add('Drag-n-Drop Sortable Container', () => (
    <div style={{width: '100%', height: 700}}>
      <SortableContainer height={500} data={data} />
    </div>
  ))
  ;
