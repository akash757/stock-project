import React from 'react';
import Chart, {
  CommonSeriesSettings,
  ValueAxis,
  Label,
  Legend,
  Series,
  Tooltip,
  Margin,
} from 'devextreme-react/chart';


export const dataSource = [{
    age: '0-4',
    male: -3.1,
    female: 2.9,
  }, {
    age: '5-9',
    male: -3.1,
    female: 3.0,
  }, {
    age: '10-14',
    male: -3.0,
    female: 2.9,
  }, {
    age: '15-19',
    male: -3.2,
    female: 3.0,
  }, {
    age: '20-24',
    male: -3.5,
    female: 3.3,
  }, {
    age: '25-29',
    male: -3.5,
    female: 3.4,
  }, {
    age: '30-34',
    male: -3.5,
    female: 3.3,
  }, {
    age: '35-39',
    male: -3.3,
    female: 3.1,
  }];
  
function customizeTooltip(e) {
  return { text: Math.abs(e.valueText) };
}

function customizeLabel(e) {
    return `${Math.abs(e.value)}%`;
}

export const BiDirectionalBarChart = ({ width, height, data, theamColor }) =>  {
  return (
    <div className="BiDirectionalBarChart">
      <div className="Header d-flex justify-content-between align-center">
          <p className="m-0">Call and Put Compression</p>
          <div className="Daysselection">
            <button className="btn btn-primary">0-7</button>
            <button className="btn btn-link">7-15</button>
            <button className="btn btn-link">15-30</button>
            <button className="btn btn-link">30</button>
          </div>
      </div>
        <Chart
        dataSource={dataSource}
        rotated={true}
        barGroupWidth={18}
        className="ChartBi"
        >
        <CommonSeriesSettings
            type="stackedbar"
            argumentField="age"
        />
        <Series
            valueField="male"
            name="Male"
            color="#d01e1e"
        />
        <Series
            valueField="female"
            name="Female"
            color="#46c15f"
        />
        <Tooltip
            enabled={true}
            customizeTooltip={customizeTooltip}
        />
        <ValueAxis>
            <Label customizeText={customizeLabel} />
        </ValueAxis>
        {/* <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
        >
            <Margin left={50} />
        </Legend> */}
        </Chart>
    </div>
  );
}
