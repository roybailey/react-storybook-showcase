import React, { Component } from 'react'
import { scaleLinear, scaleOrdinal, schemeCategory10 } from 'd3-scale'
import { max } from 'd3-array'
import { select, selectAll, event as currentEvent } from 'd3-selection'
import { attrs } from 'd3-selection-multi'
import { forceLink, forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { drag } from 'd3-drag'
import Dimensions from 'react-dimensions'
require('../App.css')


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
    const rootNode = this.node
    const svg = select(rootNode)
    const nodes = this.props.data.nodes
    const links = this.props.data.links

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
    links.forEach(function(d){
        if(!d.sourceOriginal) {
          d.sourceOriginal = d.source;
          d.targetOriginal = d.target;
        }
        d.source = find(d.sourceOriginal);
        d.target = find(d.targetOriginal);
    });

    //console.log(JSON.stringify(nodes))
    //console.log(JSON.stringify(links))

    var nodeHash = {};
    nodes.forEach(node => {
      nodeHash[node.id] = node;
    });

    links.forEach(edge => {
      edge.weight = parseInt(edge.weight);
      edge.source = nodeHash[edge.source];
      edge.target = nodeHash[edge.target];
    });

    var colors = scaleOrdinal(schemeCategory10);
    var roleScale = scaleOrdinal()
      .domain(["movie", "actor", "director"])
      .range([schemeCategory10[0], schemeCategory10[1], schemeCategory10[2]]);

    var width = +svg.attr("width"),
        height = +svg.attr("height"),
        node,
        link;
    console.log(JSON.stringify({
      nodes,
      links,
      width:width,
      height: height
    }));

    var marker2 = svg
        .append('defs')
        .append('marker')
        .attrs({'id':'arrowhead',
            'viewBox':'-0 -5 10 10',
            'refX':13,
            'refY':0,
            'orient':'auto',
            'markerWidth':13,
            'markerHeight':13,
            'xoverflow':'visible'})
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', '#999')
        .style('stroke','none');

      var simulation = forceSimulation()
          .force("link", forceLink().id(function (d) {return d.id}).distance(200))
          .force("charge", forceManyBody())
          .force("center", forceCenter(width / 2, height / 2));

      var link = svg.selectAll(".link")
          .data(links)
          .enter()
          .append("line")
          .attr("class", "link")
          .attr('marker-end','url(#arrowhead)');

      link.append("title")
          .text(function (d) {return d.type;});

      var edgepaths = svg.selectAll(".edgepath")
          .data(links)
          .enter()
          .append('path')
          .attrs({
              'class': 'edgepath',
              'fill-opacity': 0,
              'stroke-opacity': 0,
              'id': function (d, i) {return 'edgepath' + i}
          })
          .style("pointer-events", "none");

      var edgelabels = svg.selectAll(".edgelabel")
          .data(links)
          .enter()
          .append('text')
          .style("pointer-events", "none")
          .attrs({
              'class': 'edgelabel',
              'id': function (d, i) {return 'edgelabel' + i},
              'font-size': 10,
              'fill': '#aaa'
          });

      edgelabels.append('textPath')
          .attr('xlink:href', function (d, i) {return '#edgepath' + i})
          .style("text-anchor", "middle")
          .style("pointer-events", "none")
          .attr("startOffset", "50%")
          .text(function (d) {return d.type});

      node = svg.selectAll(".node")
          .data(nodes)
          .enter()
          .append("g")
          .attr("class", "node")
          .call(drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended)
          );

      node.append("circle")
          .attr("r", 8)
          .style("fill", function (d) {return roleScale(d.label)})

      node.append("title")
          .text(function (d) {return d.id});

      var text=node.append("text")

      text.append("tspan").attr("x",0).attr("dy", "1.2em").text(function (d) {return d.title})
      text.append("tspan").attr("x",0).attr("dy", "1.2em").attr("font-style","italic").text(function (d) {return d.label})

      simulation
          .nodes(nodes)
          .on("tick", ticked);

      simulation.force("link")
          .links(links);

      function ticked() {
          link
              .attr("x1", function (d) {return d.source.x;})
              .attr("y1", function (d) {return d.source.y;})
              .attr("x2", function (d) {return d.target.x;})
              .attr("y2", function (d) {return d.target.y;});

          node
              .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});

          edgepaths.attr('d', function (d) {
              return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
          });

          edgelabels.attr('transform', function (d) {
              if (d.target.x < d.source.x) {
                  var bbox = this.getBBox();

                  var rx = bbox.x + bbox.width / 2;
                  var ry = bbox.y + bbox.height / 2;
                  return 'rotate(180 ' + rx + ' ' + ry + ')';
              }
              else {
                  return 'rotate(0)';
              }
          });
      }

      function dragstarted(d) {
          if (!currentEvent.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x;
          d.fy = d.y;
      }

      function dragged(d) {
          d.fx = currentEvent.x;
          d.fy = currentEvent.y;
      }

      function dragended(d) {
         if (!currentEvent.active) simulation.alphaTarget(0);
         d.fx = undefined;
         d.fy = undefined;
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
