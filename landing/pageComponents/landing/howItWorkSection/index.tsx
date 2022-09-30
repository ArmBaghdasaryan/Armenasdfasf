import React, { FC } from 'react';
import { Box } from '@mui/material';
import { muiStyles } from './styles';
import AboutBlock from './aboutBlock';
import HowItWorksBlock from './howItWorksBlock';
import BrandsBlock from './brandsBlock';

const HowItWorkSection: FC = () => {
  return (
    <Box component='div' sx={muiStyles.container}>
      <Box component='div' sx={muiStyles.mainBlock}>

        <Box component='div' sx={muiStyles.about}> <AboutBlock /> </Box>
        <Box component='div' sx={muiStyles.howItWorksBox}> <HowItWorksBlock /> </Box>
        <Box component='div'> <BrandsBlock /> </Box>

      </Box>
    </Box>
  );
};

export default HowItWorkSection;
