import React, { useState, useEffect } from 'react';
import { StyledTable, StyleModal } from './AnimatedTable';
import { Reorder } from 'framer-motion';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CloseIcon from '@mui/icons-material/Close';
import { BubblePlot } from './BubblePlot';
import { StackedBarplot } from './StackedBarplot';
import { useSelector } from 'react-redux';

export default function AnimatedTable() {
  const [data, setResponceData] = useState([]);
  const theamColor = useSelector((state) => state.theme.mode)
  const chartData = [
    {
      "country": "Afghanistan",
      "continent": "Asia",
      "lifeExp": 43.828,
      "pop": 31889923,
      "gdpPercap": 974.5803384
    },
    {
      "country": "Albania",
      "continent": "Europe",
      "lifeExp": 76.423,
      "pop": 3600523,
      "gdpPercap": 5937.029526
    },
    {
      "country": "Algeria",
      "continent": "Africa",
      "lifeExp": 72.301,
      "pop": 33333216,
      "gdpPercap": 6223.367465
    },
    {
      "country": "Angola",
      "continent": "Africa",
      "lifeExp": 42.731,
      "pop": 12420476,
      "gdpPercap": 4797.231267
    },
    {
      "country": "Argentina",
      "continent": "Americas",
      "lifeExp": 75.32,
      "pop": 40301927,
      "gdpPercap": 12779.37964
    },
    {
      "country": "Australia",
      "continent": "Oceania",
      "lifeExp": 81.235,
      "pop": 20434176,
      "gdpPercap": 34435.36744
    },
    {
      "country": "Austria",
      "continent": "Europe",
      "lifeExp": 79.829,
      "pop": 8199783,
      "gdpPercap": 36126.4927
    },
    {
      "country": "Bahrain",
      "continent": "Asia",
      "lifeExp": 75.635,
      "pop": 708573,
      "gdpPercap": 29796.04834
    },
    {
      "country": "Bangladesh",
      "continent": "Asia",
      "lifeExp": 64.062,
      "pop": 150448339,
      "gdpPercap": 1391.253792
    },
    {
      "country": "Belgium",
      "continent": "Europe",
      "lifeExp": 79.441,
      "pop": 10392226,
      "gdpPercap": 33692.60508
    },
    {
      "country": "Benin",
      "continent": "Africa",
      "lifeExp": 56.728,
      "pop": 8078314,
      "gdpPercap": 1441.284873
    },
    {
      "country": "Bolivia",
      "continent": "Americas",
      "lifeExp": 65.554,
      "pop": 9119152,
      "gdpPercap": 3822.137084
    },
    {
      "country": "Bosnia and Herzegovina",
      "continent": "Europe",
      "lifeExp": 74.852,
      "pop": 4552198,
      "gdpPercap": 7446.298803
    },
    {
      "country": "Botswana",
      "continent": "Africa",
      "lifeExp": 50.728,
      "pop": 1639131,
      "gdpPercap": 12569.85177
    }
  ]
 const barChartdata = [
    {
      x: "20",
      groupA: 180,
      groupB: 19
    },
    {
      x: "21",
      groupA: 120,
      groupB: 40
    },
    {
      x: "25",
      groupA: 40,
      groupB: 40
    },
    {
      x: "26",
      groupA: 60,
      groupB: 45
    },
    {
      x: "28",
      groupA: 80,
      groupB: 90
    },
    {
      x: "30",
      groupA: 75,
      groupB: 25
    },
    {
      x: "32",
      groupA: 124,
      groupB: 30
    },
  ];
  
  const [animationState, setAnimationState] = useState(false); // Track animation state
  const [animationStateindex, setAnimationStateIndex] = useState(-1);
  const fetchdata= async () => {
    try {
      const respoance = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
      // const respoance = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo");
      const apiRespoance = await respoance.json();
      // const sortData = apiRespoance.sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      setResponceData(apiRespoance);
    } catch (error) {
      console.log(error)
    }
  }
  
 const handleModalEvent = (index) => {
  setAnimationState(true);
  setAnimationStateIndex(index);
 }

 const handleModalEventClose = (index) => {
  setAnimationState(false);
  setAnimationStateIndex(-1);
 }
 
  // useEffect(() => {
  //   const interval  = setInterval(() => {
  //     fetchdata();
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [data]);

  useEffect(() => {
    fetchdata();
  }, []);


  return (
    <>
      <StyledTable>
        <Reorder.Group values={data} onReorder={setResponceData}>
        <table style={{
                width: !animationState ? "100%" : "37.2%", 
            }}>
          <thead>
            <tr>
              <th width="5%">SCORE (0-100)</th>
              <th width="5%">STOCK SYMBOL</th>
              <th>TOTAL CALL BY COST</th>
              <th>TOTAL PUT BY COST</th>
              {!animationState ? <th>TOTAL CALL SELL COST</th> : ""}
              {!animationState ? <th>TOTAL PUT CALL COST</th> : ""}
              {!animationState ? <th>CALL2 PUT BUY RATIO</th> : ""}
              {!animationState ? <th>CALL BUY2 CALL SELL RATIO</th> : ""}
              {!animationState ? <th>CALL BUY2 PREVIOUS CALL BUY</th> : ""}
              {!animationState ? <th>COND. 1</th>: ""}
              {!animationState ? <th>COND. 2</th>: ""}
              {!animationState ? <th>COND. 3</th>: ""}
              {!animationState ? <th>COND. 4</th>: ""}
              {!animationState ? <th>COND. 5</th>: ""}
              {!animationState ? <th>COND. 6</th>: ""}
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((row, index) => {
              return (
              <Reorder.Item
              as='tr'
                key={row.price_change_percentage_24h} value={row.price_change_percentage_24h}
                className={
                  row.current_price > 100
                    ? 'GreenColor'
                    : 'RedColor'
                }
              >
                <td width="5%">{index + 1}</td>
                <td width="5%">{row.name}</td>
                <td>${row.current_price}</td>
                <td>${row.market_cap}</td>
                {!animationState ? <td>{row.market_cap_rank}</td>: ""}
                {!animationState ?<td>{row.price_change_percentage_24h}</td>  : ""}            
                {!animationState ?<td>2x</td>: ""}
                {!animationState ?<td>1x</td>: ""}
                {!animationState ?<td>5x</td>: ""}
                {!animationState ?<td>Yes</td>: ""}
                {!animationState ?<td>No</td>: ""}
                {!animationState ?<td>Yes</td>: ""}
                {!animationState ?<td>No</td>: ""}
                {!animationState ?<td>10</td>: ""}
                {!animationState ?<td>5</td>: ""}
                <td style={{textAlign:"center"}}>
                {animationState  && index === animationStateindex ? <CloseIcon style={{cursor:"pointer", color: "#fff", fontSize:"15px"}} onClick={() => handleModalEventClose(index)}/>
                  : <img src="analysis.svg" style={{cursor:"pointer", color:"#fff", backgroundColor:theamColor === "Light_Mode" ? "rgba(149, 149, 149, .20)" : ""}}  onClick={() => handleModalEvent(index)}/>
                }</td>
              </Reorder.Item>
            )})}
          </tbody>
        </table>
        </Reorder.Group>
      </StyledTable>
    {animationState ? <StyleModal >
      <div className='modal RightsideModal'  style={{
                width: animationState ? "63%" : "0", 
              }}>
          <div className='DivCollection' style={{display:"flex"}}>
            <BubblePlot  width={420} height={315}  data={chartData} theamColor={theamColor}/>
            <StackedBarplot data={barChartdata} width={430} height={315} theamColor={theamColor}/> 
            <BubblePlot width={420} height={350}  data={chartData} theamColor={theamColor}/>
            <StackedBarplot data={barChartdata} width={430} height={350} theamColor={theamColor}/> 
        </div>
      </div>
    </StyleModal> : ""}
    </>
  );
}
