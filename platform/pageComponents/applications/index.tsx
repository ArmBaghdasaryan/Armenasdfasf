import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import CompaniesCards from '../overview/companiesCards/CompaniesCards';

import { muiStyles } from './styles';

const Applications: FC = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h1'>Applications</Typography>
    </Box>
  );
};

export default Applications;