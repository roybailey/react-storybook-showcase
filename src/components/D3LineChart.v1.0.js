import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import { line } from 'd3-shape'
import Dimensions from 'react-dimensions'


const Line = (props) => (
    <path
        d={props.path || ''}
        stroke={props.color || 'blue'}
        strokeWidth={props.width || 2}
        fill="none" />
)


class DataSeries extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      data: [],
      interpolate: 'linear'
    };
  }

  render() {
    var self = this,
        props = this.props,
        yScale = props.yScale,
        xScale = props.xScale;

    var path = line()
          .x(function(d) { return xScale(d.x); })
          .y(function(d) { return yScale(d.y); })
          //.interpolate(this.props.interpolate);

    return <Line path={path(this.props.data)} color={this.props.color} />
  }
}


class LineChart extends Component {

    constructor(props) {
      super(props)
      this.createLineChart = this.createLineChart.bind(this)
      this.state = {
          width: (this.props.width || this.props.containerWidth || 600),
          height: (this.props.height || this.props.containerHeight || 300)
      };
    }

    componentDidMount() {
      this.createLineChart()
    }

    componentDidUpdate() {
      this.createLineChart()
    }

    createLineChart() {
      // const node = this.node
      // const dataMax = max(this.props.data)
      //
      // console.log("Max data for line "+dataMax);
    }

    render() {
      console.log(this.props);
      console.log(this.state);

      var data = this.props.data,
          size = { width: this.state.width, height: this.state.height };

      // todo: replace hard-coded max value with calculation from chart data
      var max = 30;

      var xScale = scaleLinear()
              .domain([0, 6])
              .range([0, this.state.width]);

      var yScale = scaleLinear()
              .domain([0, max])
              .range([this.state.height, 0]);

      return  <svg ref={node => this.node = node}
                width={this.state.width}
                height={this.state.height}
                >
                  <DataSeries data={data.series1} size={size} xScale={xScale} yScale={yScale} ref="series1" color="cornflowerblue" />
                  <DataSeries data={data.series2} size={size} xScale={xScale} yScale={yScale} ref="series2" color="red" />
                  <DataSeries data={data.series3} size={size} xScale={xScale} yScale={yScale} ref="series3" color="green" />
              </svg>
    }
}

export default Dimensions()(LineChart)
