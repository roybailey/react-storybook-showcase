import React, { Component } from 'react'
import Dimensions from 'react-dimensions'
import vis from 'vis'
require('../../node_modules/vis/dist/vis.min.css')


class NetworkChart extends Component {

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
    //this.createChart()
  }

  createChart() {
    const node = this.node;

    var data = {
      nodes: new vis.DataSet(this.props.nodes),
      edges: new vis.DataSet(this.props.edges)
    };
    var options = {};
    var network = new vis.Network(node, data, options);
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return <div style={{height: this.state.height, border: '1px solid red'}} ref={node => this.node = node} />
  }
}

export default Dimensions()(NetworkChart)
