import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { muiStyles } from './styles';

const Payments: FC = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h1'>Payments</Typography>
    </Box>
  );
};

export default Payments;