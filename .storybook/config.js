import { configure } from '@kadira/storybook';

const req = require.context('../src/components', true, /\.stories\.js?$/)

function loadStories() {
  require('../src/stories');
  //require('../src/components/BarChart.story.js');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
