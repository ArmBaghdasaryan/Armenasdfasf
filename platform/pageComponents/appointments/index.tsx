import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { muiStyles } from './styles';

const Appointment: FC = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h1'>Appointment</Typography>
    </Box>
  );
};

export default Appointment;