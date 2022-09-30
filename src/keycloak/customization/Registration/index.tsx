import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { muiStyles } from './styles';
import PageExpired from '../PageExpired';

const Registration = ({registerFirstNameValue, registerLastNameValue, registerEmailValue, registerUsernameValue,
  registerFirstNameError, registerLastNameError, registerUsernameError, registerEmailError, registerPassError, registerConfirmPassError,
  registrationAction, loginUrl
} : {
  registerFirstNameValue: string,
  registerLastNameValue: string,
  registerEmailValue: string,
  registerUsernameValue: string,
  registerFirstNameError: string,
  registerLastNameError: string,
  registerUsernameError: string,
  registerEmailError: string,
  registerPassError: string,
  registerConfirmPassError: string,
  registrationAction: string, 
  loginUrl: string 
}) => {
  const [disabled, setDisabled] = useState(false);

  const [formState, setFormState] = useState({
    firstName: registerFirstNameValue,
    lastName: registerLastNameValue,
    email: registerEmailValue,
    username: registerUsernameValue,
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = () => {
    setDisabled(true);
    return true;
  }

  const [registerFirstNameErrorValue, setRegisterFirstNameErrorValue] = useState(registerFirstNameError);
  const [registerLastNameErrorValue, setRegisterLastNameErrorValue] = useState(registerLastNameError);
  const [registerUsernameErrorValue, setRegisterUsernameErrorValue] = useState(registerUsernameError);
  const [registerEmailErrorValue, setRegisterEmailErrorValue] = useState(registerEmailError);
  const [registerPassErrorValue, setRegisterPassErrorValue] = useState(registerPassError);
  const [registerConfirmPassErrorValue, setRegisterConfirmPassErrorValue] = useState(registerConfirmPassError);
 

  const clearErrors = () => {
    setRegisterFirstNameErrorValue('');
    setRegisterLastNameErrorValue('');
    setRegisterUsernameErrorValue('');
    setRegisterEmailErrorValue('');
    setRegisterPassErrorValue('');
    setRegisterConfirmPassErrorValue('');
  }

  const handleChange = (e: any, key: string) => {
    clearErrors();
    setFormState((prev) => ({ ...prev, [key]: e.target.value }));
  }

  return (
    <Container component="main" sx={muiStyles.container} maxWidth="sm">
      <Box sx={muiStyles.box}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5"> Registration </Typography>
        <Box sx={{ mt: 4 }}>
          <form noValidate id="kc-register-form" className="kcFormClass" action={registrationAction} method="post" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First name"
                  placeholder="First name"
                  error={!!registerFirstNameErrorValue}
                  helperText={registerFirstNameErrorValue}
                  autoFocus
                  onChange={(e) => handleChange(e, 'firstName')}
                  value={formState.firstName}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  placeholder="Last name"
                  error={!!registerLastNameErrorValue}
                  helperText={registerLastNameErrorValue}
                  onChange={(e) => handleChange(e, 'lastName')}
                  value={formState.lastName}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  placeholder="Email address"
                  name="email"
                  autoComplete="email"
                  error={!!registerEmailErrorValue}
                  helperText={registerEmailErrorValue}
                  onChange={(e) => handleChange(e, 'email')}
                  value={formState.email}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  placeholder="Username"
                  name="username"
                  autoComplete="email"
                  error={!!registerUsernameErrorValue}
                  helperText={registerUsernameErrorValue}
                  onChange={(e) => handleChange(e, 'username')}
                  value={formState.username}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!registerPassErrorValue}
                  helperText={registerPassErrorValue}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password-confirm"
                  label="Confirm password"
                  placeholder="Confirm password"
                  type="password"
                  id="password-confirm"
                  autoComplete="current-password"
                  error={!!registerConfirmPassErrorValue}
                  helperText={registerConfirmPassErrorValue}
                  size="small"
                />
              </Grid>
              <Grid item xs>
                <Link sx={{mt: 1, textDecoration: 'none', display: 'flex', alignItems: 'center' }} href={loginUrl} variant="body2"> <ArrowBackIcon sx={{mr: 1}}/> Back to Login </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
            >
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default Registration;