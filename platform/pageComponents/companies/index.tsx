import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { muiStyles } from './styles';

const Companies: FC = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h1'>Companies</Typography>
    </Box>
  );
};

export default Companies;