import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import Dimensions from 'react-dimensions'


class BarChart extends Component {

  constructor(props) {
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
    this.state = {
        width: (this.props.width || this.props.containerWidth || 400),
        height: (this.props.height || this.props.containerHeight || 400)
    };
  }

  componentDidMount() {
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    const node = this.node
    const dataMax = max(this.props.data)
    const yScale = scaleLinear()
      .domain([0,dataMax])
      .range([0,this.state.height])
    const barWidth = this.state.width/this.props.data.length

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .enter()
      .append("rect")

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .exit()
      .remove()

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .attr("x", (d,i) => i*barWidth)
      .attr("y", d => this.state.height - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", barWidth)
      .attr("stroke", "blue")
      .attr("fill", "purple")
      .attr("fill-opacity", 0.5)
      .attr("stroke-opacity", 0.8)
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return <svg ref={node => this.node = node}
              width={this.state.width}
              height={this.state.height}
              />
  }
}

export default Dimensions()(BarChart)
