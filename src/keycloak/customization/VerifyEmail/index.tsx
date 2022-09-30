import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Paper } from '@mui/material';
import { muiStyles } from './styles';

const VerifyEmail = ({ verifyEmailUserEmail, verifyEmailResendLink }: {
  verifyEmailUserEmail: string,
  verifyEmailResendLink: string
}) => {
  return (
    <Container component="main" sx={muiStyles.container} maxWidth={false}>
      <Box sx={muiStyles.box}>
        <CheckCircleIcon sx={{ width: '40px', height: '40px', color: 'primary.success' }} />
        <Typography variant="h4" sx={{ mt: 1, fontWeight: 700, color: 'primary.main' }}> Email verification </Typography>
        <Box sx={{ mt: 1 }}>
          <Paper sx={{ boxShadow: 'none', background: 'inherit', marginTop: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography sx={{fontSize: '12px', fontWeight: 700, color: 'primary.textColor'}}> An email with instructions to verify your email address has been sent to your address {verifyEmailUserEmail}. </Typography>
            <Typography sx={{mt: 1, fontSize: '12px', fontWeight: 700, color: 'primary.textColor'}}> Have not received a verification code in your email? </Typography>

            <Paper sx={{ mt: 2, boxShadow: 'none', background: 'inherit', marginTop: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link href={verifyEmailResendLink} variant="body2" sx={{ mr: 1, cursor: 'pointer', fontWeight: 700 }}>
                Click here
              </Link>
              <Typography sx={{fontSize: '12px', fontWeight: 700, color: 'primary.textColor'}}> to re-send the email. </Typography>
            </Paper>

          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default VerifyEmail;