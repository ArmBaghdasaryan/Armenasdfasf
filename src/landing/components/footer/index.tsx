import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { muiStyles } from './styles';

const Footer:FC = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <Box component="div" sx={muiStyles.footer}>
      <Typography sx={muiStyles.text}>Copyright © {getYear()} KDIPA</Typography>
    </Box>
  )
}

export default Footer;