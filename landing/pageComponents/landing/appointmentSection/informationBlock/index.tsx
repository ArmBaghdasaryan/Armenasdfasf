import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import M from './../../../../../src/messages'
import { muiStyles } from './styles';


const InformationBlock: FC = () => {
  return (
    <Box component='div'>
      <Typography sx={muiStyles.title} variant='h1'> {M.get('pages.landing.appointment.title')} </Typography>
      <Typography sx={muiStyles.description} variant='h1'> {M.get('pages.landing.appointment.desc')}</Typography>
    </Box>
  );
};

export default InformationBlock;
