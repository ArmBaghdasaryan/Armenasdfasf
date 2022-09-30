import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { muiStyles } from './styles';
import M from './../../../../../../src/messages'


const InformationBlock: FC = () => {
  return (
    <Box component='div' sx={{ width: '100%' }}>
      <Typography sx={muiStyles.title} variant='h1'>{M.get('pages.landing.login.title')} </Typography>
      <Typography sx={muiStyles.description} variant='h1'> {M.get('pages.landing.login.desc')} </Typography>
    </Box>
  );
};

export default InformationBlock;
