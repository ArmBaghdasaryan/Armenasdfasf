import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorIcon from '@mui/icons-material/Error';
import { muiStyles } from './styles';

const ErrorPage = ({ errorMessageSummary, backToAppUrl, skipLinkErrorPage }: {
  errorMessageSummary: string,
  backToAppUrl: string,
  skipLinkErrorPage: boolean
}) => {

  return (
    <Container component="main" sx={muiStyles.container} maxWidth={false}>
      <Box sx={muiStyles.box}>
        <ErrorIcon sx={{ width: '40px', height: '40px', color: 'primary.error' }} />
        <Typography variant="h4" sx={{ mt: 1, fontSize: '24px', fontWeight: 700, color: 'primary.textColor' }}> We are sorry... </Typography>
          <Paper sx={{ mt: 2, boxShadow: 'none', background: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h6" sx={{ fontSize: '12px', fontWeight: 500, color: 'primary.textColor', textAlign: 'center' }}> {errorMessageSummary} </Typography>
            {(!skipLinkErrorPage && !! backToAppUrl) &&
            <Link href={backToAppUrl} variant="body2" sx={{mt: 2, textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <ArrowBackIcon sx={{mr: 1}}/> Back to application
            </Link>}
          </Paper>
      </Box>
    </Container>
  );
}

export default ErrorPage;