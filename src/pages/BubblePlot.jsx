import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 80, left: 100 };
const BUBBLE_MIN_SIZE = 4;
const BUBBLE_MAX_SIZE = 40;

export const BubblePlot = ({ width, height, data, theamColor }) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by subtracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.gdpPercap)) || [0, 1];
    return d3.scaleLinear().domain([0, max || 1]).range([0, boundsWidth]).nice();
  }, [data, width]);
  
  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.lifeExp)) || [0, 1];
    return d3.scaleLinear().domain([min || 0, max || 1]).range([boundsHeight, 0]).nice();
  }, [data, height]);
  
  useEffect(() => {
    if (!xScale || !yScale) {
      console.error("Scales are not initialized");
      return;
    }
  
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
  
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", `translate(0, ${boundsHeight})`)
      .call(xAxisGenerator);
  
    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);
  
  const groups = data
    .map((d) => d.continent)
    .filter((x, i, a) => a.indexOf(x) === i);

  const colorScale = d3
    .scaleOrdinal()
    .domain(groups)
    .range(["#4AD366", "#E41E1E"]);

  const sizeScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.pop));
    return d3
      .scaleSqrt()
      .domain([min, max])
      .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
  }, [data, width]);

  // Render the X and Y axis using d3.js, not React
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", `translate(0,${boundsHeight + 20})`)
      .call(xAxisGenerator);
    svgElement
      .append("text")
      .attr("font-size", 12)
      .attr("text-anchor", "end")
      .attr("x", boundsWidth)
      .attr("y", boundsHeight + 60)
      .text("Gdp per Capita");

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement
      .append("g")
      .attr("transform", "translate(-20,0)")
      .call(yAxisGenerator);
    svgElement
      .append("text")
      .attr("font-size", 12)
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -60)
      .text("Life expectancy")
      .attr("transform", "rotate(-90)");
  }, [xScale, yScale, boundsHeight, boundsWidth]);

  // Build the shapes
  const allShapes = data
    .sort((a, b) => b.pop - a.pop)
    .map((d, i) => (
      <circle
        key={i}
        r={sizeScale(d.pop)}
        cx={xScale(d.gdpPercap)}
        cy={yScale(d.lifeExp)}
        opacity={1}
        stroke={colorScale(d.continent)}
        fill={colorScale(d.continent)}
        fillOpacity={0.4}
        strokeWidth={1}
      />
    ));

  return (
    <div className="Chart" style={{ width: "50%", height: "100%" }}>
      <svg width={width} height={height} className="${theamColor}">
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${MARGIN.left},${MARGIN.top})`}
        >
          {allShapes}
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
