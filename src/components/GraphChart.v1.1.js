import React, { Component } from 'react'
import { scaleLinear, scaleOrdinal } from 'd3-scale'
import { max } from 'd3-array'
import { select, selectAll, event as currentEvent } from 'd3-selection'
import { forceLink, forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { drag } from 'd3-drag'
require('../App.css')
import Dimensions from 'react-dimensions'


class GraphChart extends Component {

  constructor(props) {
    super(props)
    this.createGraphChart = this.createGraphChart.bind(this)
  }

  componentDidMount() {
    this.createGraphChart()
  }

  componentDidUpdate() {
    this.createGraphChart()
  }

  createGraphChart() {
    const node = this.node
    const nodes = this.props.data.nodes
    const edges = this.props.data.links

    // find the node index
    function find(f){
      var i = -1
      nodes.forEach(function(node, index){
          if(node.id === f)
              i = index;
      });
      return i;
    }

    //set the source and target index
    edges.forEach(function(d){
        if(!d.sourceOriginal) {
          d.sourceOriginal = d.source;
          d.targetOriginal = d.target;
        }
        d.source = find(d.sourceOriginal);
        d.target = find(d.targetOriginal);
    });

    //console.log(JSON.stringify(nodes))
    //console.log(JSON.stringify(edges))

    var nodeHash = {};
    nodes.forEach(node => {
      nodeHash[node.id] = node;
    });

    edges.forEach(edge => {
      edge.weight = parseInt(edge.weight);
      edge.source = nodeHash[edge.source];
      edge.target = nodeHash[edge.target];
    });

    var marker = select(node)
      .append('defs')
      .append('marker')
        .attr("id", "Triangle")
        .attr("refX", 24)
        .attr("refY", 12)
        .attr("markerUnits", 'userSpaceOnUse')
        .attr("markerWidth", 24)
        .attr("markerHeight", 36)
        .attr("orient", 'auto')
      .append('path')
        .attr("d", 'M 0 0 24 12 0 24 6 12');

    var roleScale = scaleOrdinal()
      .domain(["movie", "actor", "manager"])
      .range(["#75739F", "#41A368", "#FE9922"]);

    var linkForce = forceLink();

    function forceTick() {
      select(node)
        .selectAll("line.link")
        .attr("x1", d => d.source.x)
        .attr("x2", d => d.target.x)
        .attr("y1", d => d.source.y)
        .attr("y2", d => d.target.y);
      select(node)
        .selectAll("g.node")
        .attr("transform", d => `translate(${d.x},${d.y})`);
    }

    var simulation = forceSimulation()
      .force("charge", forceManyBody().strength(-40))
      .force("center", forceCenter().x(500).y(400))
      .force("link", linkForce)
      .nodes(nodes)
      .on("tick", forceTick);

    simulation.force("link").links(edges);

    select(node)
      .selectAll("line.link")
      .data(edges, d => `${d.source.id}-${d.target.id}`)
      .enter()
      .append("line")
        .attr("class", "link")
        .style("opacity", .5)
        .style("stroke-width", d => 1+d.weight);

    select(node)
      .selectAll("line")
      .attr("marker-end", "url(#Triangle)");

    var nodeEnter = select(node)
      .selectAll("g.node")
      .data(nodes, d => d.id)
      .enter()
      .append("g")
        .attr("class", "node");
    nodeEnter.append("circle")
      .attr("r", d => (d.label === 'movie'? 20 : 10))
      .style("fill", d => roleScale(d.label));
    nodeEnter.append("text")
      .style("text-anchor", "middle")
      .attr("y", 15)
      .text(d => d.title);

    var dragit = drag();

    dragit
      .on("drag", dragging);

    selectAll("g.node").call(dragit);

    function dragging(d) {
      var e = currentEvent;
      d.fx = e.x;
      d.fy = e.y;
      if (simulation.alpha() < 0.1) {
        simulation.alpha(0.1);
        simulation.restart();
      }
    }
  }

  render() {
    console.log(this.props);
    return <svg ref={node => this.node = node}
              width={this.props.width || this.props.containerWidth || 400}
              height={this.props.height || this.props.containerHeight || 400}
              />
  }
}

export default Dimensions()(GraphChart)
