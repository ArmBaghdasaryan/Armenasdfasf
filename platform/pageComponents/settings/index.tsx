import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { muiStyles } from './styles';

const Settings: FC = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h1'>Settings</Typography>
    </Box>
  );
};

export default Settings;