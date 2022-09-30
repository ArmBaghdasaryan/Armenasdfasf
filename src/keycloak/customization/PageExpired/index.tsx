import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockClockIcon from '@mui/icons-material/LockClock';
import { Paper } from '@mui/material';
import { muiStyles } from './styles';

const PageExpired = ({restartLoginUrl, continueLoginUrl}: {
  restartLoginUrl: string,
  continueLoginUrl: string
}) => {
  return (
    <Container component="main" sx={muiStyles.container} maxWidth={false}>
      <Box sx={muiStyles.box}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.textColor' }}> Page has expired </Typography>
        <LockClockIcon sx={{ width: '32px', height: '32px', color: 'primary.main' }} />
        <Box sx={{ mt: 1 }}>
          <Paper sx={{ boxShadow: 'none', background: 'inherit', marginTop: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href={restartLoginUrl} variant="body2" sx={{ cursor: 'pointer', fontWeight: 700 }}>
              Restart login action
            </Link>
            <Link href={continueLoginUrl} variant="body2" sx={{ cursor: 'pointer', fontWeight: 700, mt: 2 }}>
              Continue Login action
            </Link>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default PageExpired;