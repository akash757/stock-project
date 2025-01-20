import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';  
import { SitemarkIcon } from './CustomIcons';
import AppTheme from './AppTheme'; // Import AppTheme component
import { useNavigate } from 'react-router-dom';
import { BorderColor, VerifiedUser } from '@mui/icons-material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { color } from 'framer-motion';
import  File  from '../assets/Images/file.png';
import  CheckIcon  from '../assets/Images/CheckIcon.png';
import { Link } from 'react-router-dom';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  background:'#000',
  // height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  // minHeight: '100%',
  padding:'0',
  margin:'0',
  marginTop: '-102px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width:'100%',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
  '& .MainDiv' : {
    width: '80%',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  '& .UserIcon': {
    position: 'absolute',
    top: '46px',
    color: '#000',
    left: '10px',
    fontSize: '18px',
}
}));
const StyleDiv = styled(Stack)(({ theme }) => ({ 
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  '& p, h1' : {
    margin: '0',
  },
  '& img' : {
    marginBottom: '70px',
    height: '70px',
  },
  '& .ShortIntro' : {
    width: '343px',
    fontSize: '14px',
    paddingTop: '7px',
  },
  '& .WelcomeText' : {
    fontSize: '28px',
    position: 'relative',
    top: '8px',
  },
  '& .text-uppercase' : {
    fontSize: '50px',
  }
}));
const StyleBox = styled(Stack)(({ theme }) => ({ 
  background: 'rgba(75,75,75,0.5)',
  width: '500px',
  padding: '45px',
  borderRadius: '10px',
  marginLeft: '50px',
  marginBottom: '50px',
  marginTop: '80px',
  '& .SignInText': {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop:'0',
    marginBottom:'35px',
  },
}));
const FromGroup = styled(Stack)(({ theme }) => ({ 
  '& label': {
    fontSize: '14px',
    paddingBottom: '3px',
  },
  '& .Inputs': {
    height: '45px',
    padding:'10px 35px',
    fontSize: '14px',
    borderRadius: '5px',
    border: 'none',
  },
  '& .mt-3': {
    marginTop: "20px",
  },
  '& .remember-forgot': {
    display: 'flex',
    paddingTop: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize:'14px',
  },
  '& .remember-me' : {
    position: 'relative',
    marginTop: '5px',
  },
  '& .forgot-password': {
    color: '#fff',
    fontWeight: 'normal',
    fontSize:'14px',
  },
  '& .CheckBoxRemember' : {
    height: '17px',
    width: '17px',
    borderRadius: '13px',
    margin: '0',
    padding: '0',
    marginRight: '10px',
  },
  '& .LableOfRemember': {
    position: 'relative',
    top: '-3px',
  }
}));
const StyleModal = styled(Stack)(({ theme }) => ({ 
  display:'flex',
  position: 'fixed',
  zIndex:'9999',
  top:'0',
  bottom:'0',
  left:'0',
  right:'0',
  background: 'rgba(0,0,0,0.5)',
  alignItems: 'center',
  justifyContent: 'center',
  '& .InnerStyleModal': {
    display:'flex',
    width:'420px',
    height:'390px',
    background:'#2838cf',
    borderRadius:'10px',
    alignItems: 'center',
    justifyContent: 'center',    
    flexDirection: 'column',
    padding:'20px 50px',
    textAlign:'center',
  },
  '& .SignDark': {
    background: '#000',
    borderColor: "#000",
    padding:'10px 40px',
    fontSize:'12px',
  },
  '& .ShortIntroModal': {
    fontSize:'12px',
    marginTop:'5px',
  }
}));

 
export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [signUpSuccess, setSignUpSuccess] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };
  const handleSignupClick = () => {
    setSignUpSuccess(true);
  }

  return (
    <>
      <AppTheme {...props}> {/* Use AppTheme to wrap your components */}
        <CssBaseline enableColorScheme />
        <SignInContainer className='SignInContainer' direction="column" justifyContent="space-between">
        {/* onClick={() => navigate("/dashboard")} */}
          {/* <Card variant="outlined" > */}
          <div className='d-flex MainDiv' component="form" onSubmit={handleSubmit} noValidate>
          <StyleDiv className='StyleDiv'>
            <div>
              <img src={File} alt="My File" />
              <h1 className='font-weight-normal'><div>Transform Your</div> <div> Trading with </div><b>Real-Time Insights</b></h1>
              <p className='ShortIntro mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </StyleDiv>
          <StyleBox className='StyleBox'>
              <p className='SignInText'>              
                Sign Up
              </p>
              <FromGroup>
                <span style={{position:"relative", display: 'flex', flexDirection: 'column' }}>
                  <label for="email">Email</label>
                  <PermIdentityIcon className='UserIcon'/>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter Email"
                    autocomplete="email"
                    className='Inputs'
                  />
                </span>
                <span style={{position:"relative", display: 'flex', flexDirection: 'column' }}>
                <label for="email" className='mt-3'>Password</label>
                <LockIcon className='UserIcon' style={{top: '62px'}}/>
                <input 
                  type="Password" 
                  id="Password" 
                  placeholder="Enter Password"
                  autocomplete="Password"
                  className='Inputs'
                />
                <VisibilityIcon className='UserIcon' style={{top: '62px', right:"16px", left:"auto"}}/>
                </span>
                <span style={{position:"relative", display: 'flex', flexDirection: 'column' }}>
                <label for="email" className='mt-3'>Confirm Password</label>
                <LockIcon className='UserIcon' style={{top: '62px'}}/>
                <input 
                  type="Password" 
                  id="Password" 
                  placeholder="Enter Password"
                  autocomplete="Password"
                  className='Inputs'
                />
                <VisibilityIcon className='UserIcon' style={{top: '62px', right:"16px", left:"auto"}}/>
                </span>
              </FromGroup>
              <button type="button" className="btn btn-primary mt-5" onClick={handleSignupClick}>Sign Up</button>
              <div className='d-flex align-middle justify-content-center mt-5'>
                <p className='LableOfRemember m-0 mr-2'>
                  Already a Member?
                </p>
                <Link to="/signin" className="NewSignUp btn btn-Normal text-warning p-0">
                Sign In
                </Link>
              </div>
          </StyleBox>
          
              {/* Form Fields */}
            </div>
            
          {/* </Card> */}
        </SignInContainer>
      </AppTheme>
      {signUpSuccess ? <StyleModal>
          <div className='InnerStyleModal'>
            <img src={CheckIcon} alt='CheckIcon' />
            <h1>Congratulations !</h1>
            <p className='ShortIntroModal'>Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply</p>
            <Link to="/signin" className="btn btn-dark SignDark">Sign In</Link>
          </div>
      </StyleModal> :""}
    </>
  );
}
