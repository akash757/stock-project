import React, { useState, useEffect } from 'react';
import { StyleAniamtionModal } from './AnimatedTable';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

export default function DetailsData(detailsofRow, closeDetails) {
    debugger
  const [dummyResponce, setResponceData] = useState();
  const theamColor = useSelector((state) => state.theme.mode)
  
  const [showDetails, setShowDetails] = useState(false); // Track animation state
 
  useEffect(() => {
    setResponceData(detailsofRow.Data);
  }, []);
  return (
    <>
      <StyleAniamtionModal>
        <div className='Modal-Content'>
          <div className='Header'>
            <h5 className='p-0 m-0'>TSLA</h5>
            <button type="button"  onClick={closeDetails} className='p-0 btn btn-link CloseBtnDetails'>
                <CloseIcon style={{cursor:"pointer", color: "#fff"}}/>
            </button>
          </div>
            
            <table width={'100%'}>
            <thead>
                <tr>
                <th>EXECUTION TIME</th>
                <th>STOCK SYMBOL</th>
                <th>EXPIRTION DATE</th>
                <th>OPTION TYPE</th>
                <th>BUY / SELL</th>
                <th>TOTAL COST</th>
                <th>STRIKE PRICE</th>
                <th>SPOT PRICE</th>
                <th>SPOT PRICE DIFFERENCE</th>
                <th>EXPIRTION DIFFERENCE</th>
                <th>PRICE</th>
                <th>BID</th>
                <th>ASK</th>
                <th>SIZE</th>
                </tr>
            </thead>
            <tbody>
                {dummyResponce && dummyResponce.map((row, index) => {
                    debugger
                return (
                <tr   
                    key={index}             
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
                    <td>{row.market_cap_rank}</td>
                    <td>{row.price_change_percentage_24h}</td>       
                    <td>2x</td>
                    <td>1x</td>
                    <td>5x</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>10</td>
                </tr>
                )})}
            </tbody>
            </table>
        </div>
      </StyleAniamtionModal>
    </>
  );
}
