import { Padding } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { transition } from 'd3';

export const StyledTable = styled('div')({
  position: 'relative',
  // background:'#000',
  // color:'#fff',
  border:'none',
  overflow: 'hidden', 
  '& ul' : {
    padding: "0 10px",
  },
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    border:'none',
  },
  '& th' : {
    fontSize: '14px',
    background: 'rgba(110,107,107,50%)',
    fontWeight: 'normal',
  },
  '& td' : {
    fontSize: '14px',
    fontFamily:'Poppins'
  },
  '& th, & td': {
    padding: '5px 10px',
    textAlign: 'left',
    border: 'none ',
  },
  '& tbody tr': {
    display: 'table-row',
  },
  // '& tr:nth-child(even)': {
  //   backgroundColor: '#1e1a1a', /* Light gray */
  // },
  '& .GreenColor td:nth-child(n+2):nth-child(-n+9) ': {
    color: '#4AD366',
  },
  '& .RedColor td:nth-child(n+2):nth-child(-n+9)': {
    color: '#E41E1E',
  },
  '& .OptionSelection' : {
    height:'35px',
    width:"150px",
    border: "1px solid #f1f1f1",
    padding:"5px 15px",
    cursor:"pounter",
    margin:"15px 10px 0 10px",
    borderRadius: "5px" 
  }
});
export const StyleModal = styled('div')({
  '& .RightsideModal': {
    position:'fixed',
    top:'0',
    bottom:'0',
    right:'0',
    width:'63%',
    overflowY:"auto",
    overflowX:"hidden",
    transition: 'all 0.5s ease-in-out',    
  },
  '& .DivCollection': {
    display: 'flex',
    flexWrap: "wrap",
    height:'100%',
  },
  '& .RightsideModal .Chart': {
    flex: "1 1 45%",
    height: '35vh !important',
  }
});