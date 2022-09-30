import React, { FC } from 'react';
import { Box } from '@mui/material';

import InformationBlock from './informationBlock';
import FormBlock from './formBlock';
import { muiStyles } from './styles';

const LoginComponent: FC = () => {

  return (
    <Box component='div' sx={muiStyles.container}>
      <Box component='div' sx={muiStyles.mainBlock}>
        <Box component='div' sx={muiStyles.infoBlock}>
          <InformationBlock />
        </Box>
        <Box component='div' sx={muiStyles.formBlock}>
          <FormBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
