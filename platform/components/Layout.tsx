import React, { FC } from 'react';
import { Box } from '@mui/material';
import Sidebar from './sidebar';
import { variables } from '../../src/configs'

const Layout: FC<{children: any}> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { xs: `calc(100% - ${variables.overviewDrawerWidth})` } }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;