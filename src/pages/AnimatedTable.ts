import { Height, Padding } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';
import { transition } from 'd3';
import { Background } from 'devextreme-react/cjs/range-selector';

export const StyledTable = styled('div')({
  position: 'relative',
  fontFamily:"Barlow",
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
    fontSize: '12px',
    background: 'rgba(149, 149, 149, 10%)',
    fontWeight: '600',
    color:'#625f5f',
    position:'relative',
    fontFamily:'Barlow'
  },
  '& th:first-child': {
    borderTopLeftRadius: '6px'
  },
  '& th:last-child' : {
      borderTopRightRadius: '6px'
  },
  '& th:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: '40%',  
    height: '25%', 
    width: '1px',
    backgroundColor: '#666',
    opacity: 0.5,
    pointerEvents: 'none'
},
  '& td' : {
    fontSize: '12px',
    fontFamily:'Barlow'
  },
  '& th, & td': {
    padding: '5px 10px',
    textAlign: 'left',
    border: 'none ',
  },
  '& tbody tr': {
    display: 'table-row',
    cursor:"pointer",
  },
  // '& tr:nth-child(even)': {
  //   backgroundColor: '#1e1a1a', /* Light gray */
  // },
  '& .GreenColor td:nth-child(n+2):nth-child(-n+9) ': {
    color: '#00FF59',
  },
  '& .RedColor td:nth-child(n+2):nth-child(-n+9)': {
    color: '#FF605D',
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
  fontFamily:"Barlow",
  '& .RightsideModal': {
    position:'fixed',
    zIndex:'999999',
    top:'0',
    bottom:'0',
    left: 'auto',
    right:'0',
    width:'63%',
    overflowY:"auto",
    overflowX:"hidden",
    transition: 'all 0.5s ease-in-out',
    fontFamily:"Barlow",
  },
  '& .DivCollection': {
    display: 'flex',
    flexWrap: "wrap",
    height:'100%',
  },
  '& .RightsideModal .Chart': {
    flex: "1 1 45%",
    height: '35vh !important',
  },
  '& .RightsideModal .Chart svg': {
    width: "99%",
    height: '43.5vh !important',
  },
  '& .RightsideModal .BiDirectionalBarChart': {
    flex: "1 1 45%",
    width: '50%',
    height: '50vh !important',
    marginTop: '98px',
  },
  '& .RightsideModal .ChartBi': {
    flex: "1 1 45%",
    width: '99%',
    height: '48.5vh !important',
  } 
});
export const StyleAniamtionModal = styled('div')({
  fontFamily:"Barlow",
  position: 'absolute',
  zIndex:'999999',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%;',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  '& .Modal-Content': {
    backgroundColor: '#000',
    width: '100%',
    maxWidth: '100%',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(100%)',
    animation: 'slideUp 0.3s ease-in-out forwards',
    overflowY: 'auto',
    height: '100%',
  },
  '& .Modal-Content.Light_Mode': {
    backgroundColor: 'rgba(225,225,225,100%)',
    borderRadius:"0px",
  },
  /* Keyframe for bottom-to-top animation */
  '@keyframes slideUp': {
    from: {
      transform: 'translateY(100%)',
    },
    to: {
      transform: 'translateY(0)',
    },
  },
  '& .CloseBtnDetails': {
    position: 'absolute',
    right: '18px',
    top: '19px',
  },
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    border:'none',
    marginTop:'20px',
  },
  '& th' : {
    fontSize: '12px',
    background: 'rgba(110,107,107,10%)',
    fontWeight: '500',
    color: 'rgba(149, 149, 149, 1)',
  },
  '& td' : {
    fontSize: '12px',
    fontFamily:'Barlow'
  },
  '& th, & td': {
    padding: '5px 10px',
    textAlign: 'left',
    border: 'none ',
  },
  '& tbody tr': {
    display: 'table-row',
  },
  '& .GreenColor td:nth-child(n+2):nth-child(-n+9) ': {
    color: '#00FF59',
  },
  '& .RedColor td:nth-child(n+2):nth-child(-n+9)': {
    color: '#FF605D',
  },
  
});
export const StyleOption = styled('div')({
  position: 'absolute',
  right: '11px',
  zIndex: '9999',
  top: '-48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& .SearchInputs' : {
    width:'80%',
    marginRight:'15px',
    fontSize:'14px',
  },
  '& .SearchInputs input' : {
    height:"35px",
    borderRadius:'5px',
    border: 'none',
    padding:'10px 35px',
    background: '#959595',
    fontSize:"14px",
    fontWeight:"500"
  },
  '& .SearchInputs input::placeholder' : {    
    color: '#000',
    fontSize:'14px',
  },
  '& .SearchInputs svg' : {
    position: 'absolute',
    top: '6px',
    left:'10px',
    zIndex: '99999',
    color: '#000',
    width:'20px',
  },
  '& .Filtericon' : {
    height: '35px',
    display:'flex',
    alignItems: 'center',
    fontSize:'14px',
    background:'#2838CF',
    fontWeight:"500"
  },
  '& .Filtericon svg' : {
    fontSize: '20px',
    marginRight:'10px',
  },
  '& .badge' : {
    marginLeft: '10px',
  },
});
export const StyleModalFilter = styled('div')({
  '& .RightsideModal': {
    position:'fixed',
    zIndex:'999999',
    top:'0',
    bottom:'0',
    left: 'auto',
    right:'0',
    width:'100%',
    overflowY:"auto",
    overflowX:"hidden",
    transition: 'all 0.5s ease-in-out',
    padding:'15px',    
  },
  '& .DivCollection': {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    height: '30px',
    width: '100%',
  },
  '& .RightIcon': {
    display: 'flex',
    alignItems: 'center',
  }, 
  '& .BothSide' : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize:"14px",
  }, 
  '& .ButtonSame' : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize:"14px",
    width:'100%',
  },
  '& .ButtonSame button' : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:"14px",
    width:'45%',
    textAlign: 'center',
    height: '40px',
    marginBottom:'30px',
  }
  
});