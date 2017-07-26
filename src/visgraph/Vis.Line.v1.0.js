import React, { Component } from 'react'
import Dimensions from 'react-dimensions'
import vis from 'vis'
require('../../node_modules/vis/dist/vis.min.css')


class LineChart extends Component {

  constructor(props) {
    super(props)
    this.createChart = this.createChart.bind(this)
    this.state = {
        width: (this.props.width || this.props.containerWidth || 400),
        height: (this.props.height || this.props.containerHeight || 400)
    };
  }

  componentDidMount() {
    this.createChart()
  }

  componentDidUpdate() {
    this.createChart()
  }

  createChart() {
    const node = this.node;
    var dataset = new vis.DataSet(this.props.data);
    var options = {
      start: '2014-06-10',
      end: '2014-06-18'
    };
    if(!this.graph2d)
      this.graph2d = new vis.Graph2d(node, dataset, options);
    else
      this.graph2d.setItems(dataset);
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return <div className="myvis" ref={node => this.node = node} />
  }
}

export default Dimensions()(LineChart)
