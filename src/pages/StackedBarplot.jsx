import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

export const StackedBarplot = ({ width, height, data, groupAColor = "#4AD366", groupBColor = "#E41E1E", theamColor }) => {
  // bounds = area inside the graph axis = calculated by subtracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups = data.map((d) => String(d.x));
  const allSubgroups = ["groupA", "groupB", "groupC", "groupD"]; // todo

  // Data Wrangling: stack the data
  const stackSeries = d3.stack().keys(allSubgroups).order(d3.stackOrderNone);
  const series = stackSeries(data);

  // Y axis
  const max = 200; // todo
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(allGroups)
      .range([0, boundsWidth])
      .padding(0.65);
  }, [data, width]);

  // Color Scale
  const colorScale = d3
    .scaleOrdinal()
    .domain(allGroups)
    .range([groupAColor, groupBColor]);

  // Render the X and Y axis using d3.js, not React
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  const rectangles = series.map((subgroup, i) => {
    return (
      <g key={i}>
        {subgroup.map((group, j) => {
          return (
            <rect
              key={j}
              x={xScale(group.data.x)}
              y={yScale(group[1])}
              height={yScale(group[0]) - yScale(group[1])}
              width={xScale.bandwidth()}
              fill={colorScale(subgroup.key)}
              opacity={0.9}
            ></rect>
          );
        })}
      </g>
    );
  });

  return (
    <div  className="Chart" style={{ width: "50%", height: "100%" }}>
      <div className="Header d-flex justify-content-between align-center">
          <p className="m-0">Call and Put Ratio</p>
          <div className="Daysselection">
            <button className="btn btn-primary">0-7</button>
            <button className="btn btn-link">7-15</button>
            <button className="btn btn-link">15-30</button>
            <button className="btn btn-link">30</button>
          </div>
      </div>
      <svg width={width} height={height} className="${theamColor}">
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${MARGIN.left},${MARGIN.top})`}
        >
          {rectangles}
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${MARGIN.left},${MARGIN.top})`}
        />
      </svg>
    </div>
  );
};
