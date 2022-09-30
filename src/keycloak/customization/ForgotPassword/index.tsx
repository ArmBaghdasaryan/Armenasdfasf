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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles, { muiStyles } from './styles';

const useStyles = makeStyles(styles);

const ForgotPassword = ({ loginAction, loginUrl, fpUsernameValue, fpUsernameError }: {
  loginAction: string,
  loginUrl: string,
  fpUsernameError: string,
  fpUsernameValue: string,
}) => {
  const classes = useStyles();

  const [disabled, setDisabled] = useState(false);
  const [formState, setFormState] = React.useState({ username: fpUsernameValue });
  const [error, setError] = React.useState(fpUsernameError);

  const handleUsernameChange = (e: any, key: string) => {
    setError('')
    setFormState((prev) => ({ ...prev, [key]: e.target.value }));
  }

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
        <Typography sx={{mb: '12px', mt: 1}} component="h1" variant="h5"> Forgot Your Password ? </Typography>
        <Box sx={{ width: '100%', mt: 1 }}>
          <form id="kc-custom-forgot-password-form" className={classes.form} noValidate action={loginAction} method="post" onSubmit={handleSubmit}>
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
              error={!!error}
              helperText={error}
              onChange={(e) => handleUsernameChange(e, 'username')}
              value={formState.username}
              size="small"
            />
            <Grid item>
              <Link sx={{mt: 1, textDecoration: 'none', display: 'flex', alignItems: 'center' }} href={loginUrl} variant="body2"> <ArrowBackIcon sx={{mr: 1}}/> Back to Login </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: '16px' }}
              disabled={disabled}
            >
              Submit
            </Button>
          </form>
        </Box>
        <Box sx={{ boxShadow: 'none', mt: 4 }}>
          <Typography variant="h6" sx={{ display: 'flex', textAlign: 'center', color: `primary.textColor`, fontSize: '12px', fontWeight: 700 }}>
            Enter your username or email address and we will send you instructions on how to create a new password.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;