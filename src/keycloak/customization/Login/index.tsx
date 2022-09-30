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
import { makeStyles } from '@mui/styles';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';

import styles, { muiStyles } from './styles';

const useStyles = makeStyles(styles);

const Login = ({usernameValue, hasLoginError, loginErrorMsg, loginAction, loginResetCredentialsUrl, registrationUrl, templateErrorMsgType, templateErrorMsg}: {
  usernameValue: string,
  hasLoginError: boolean,
  loginErrorMsg: string,
  loginAction: string,
  loginResetCredentialsUrl: string,
  registrationUrl: string,
  templateErrorMsgType: string,
  templateErrorMsg: string,
}) => {
  const classes = useStyles();

  const [disabled, setDisabled] = useState(false);
  const [formState, setFormState] = React.useState({
    username: usernameValue,
    password: ''
  });

  const handleChange = (e: any, key: string) => {
    setHasLoginErrorValue(false);
    setLoginErrorMsgValue('');
    setFormState((prev) => ({ ...prev, [key]: e.target.value }));
  }

  const getIconByType = (type: string) => {
    const iconStyle = { color: `primary.${type}`, mr: 1 };
    switch (type) {
      case 'success':
        return <CheckCircleIcon sx={iconStyle} />
      case 'warning':
        return <WarningIcon sx={iconStyle} />
      case 'error':
        return <ErrorIcon sx={iconStyle} />
      case 'info':
        return <InfoIcon sx={iconStyle} />
      default:
        return null;
    }
  }

  const [hasLoginErrorValue, setHasLoginErrorValue] = useState(hasLoginError);
  const [loginErrorMsgValue, setLoginErrorMsgValue] = useState(loginErrorMsg);

  const templateErrorMsgTypeTrim = templateErrorMsgType?.trim();
  const templateErrorMsgTrim = templateErrorMsg?.trim()

  const handleSubmit = () => {
    setDisabled(true);
    return true;
  }
  return (
    <Container component="main" sx={muiStyles.container}>
      <Box sx={muiStyles.box}>
        <Avatar sx={{ m: 1, backgroundColor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5"> Sign in 2</Typography>
        <Box sx={{ mt: 1 }}>
          <form id="kc-custom-login-form" className={classes.form} noValidate action={loginAction} method="post" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email or username"
              placeholder="Email or username"
              name="username"
              autoComplete="email"
              autoFocus
              error={hasLoginErrorValue}
              helperText={loginErrorMsgValue}
              onChange={(e) => handleChange(e, 'username')}
              value={formState.username}
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={hasLoginErrorValue}
              onChange={(e) => handleChange(e, 'password')}
              value={formState.password}
              size="small"
            />
            <Grid container sx={{ marginTop: '12px' }}>
              <Grid item xs sx={{ display: 'flex', justifyContent: 'end' }}>
                <Link href={loginResetCredentialsUrl} variant="body2">
                  Forgot Password ?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              id="kc-login"
              sx={{ marginTop: '16px' }}
              disabled={disabled}
            >
              Sign in
            </Button>
            <Grid container sx={{ marginTop: '16px' }}>
              <Grid item xs sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: 'primary.textColor' }} > New user? </Typography>
                <Link sx={{ marginLeft: '6px', fontSize: '14px' }} href={registrationUrl} variant="body2">
                  Register
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      {(templateErrorMsgTypeTrim && templateErrorMsgTrim) && (
        <Box sx={{ ...muiStyles.errorBox, backgroundColor: `primary.${templateErrorMsgTypeTrim}BG`, boxShadow: 'none', mt: 2 }}>
          {getIconByType(templateErrorMsgTypeTrim)}
          <Typography variant="h6" sx={{ color: `primary.${templateErrorMsgTypeTrim}`, fontSize: '12px', fontWeight: 700 }}>{templateErrorMsgTrim} </Typography>
        </Box>
      )}
    </Container>
  );
}

export default Login;