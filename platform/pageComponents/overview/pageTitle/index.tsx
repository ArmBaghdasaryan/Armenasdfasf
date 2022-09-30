import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import CustomButton from '../../../../src/landing/components/button';
import M from '../../../../src/messages'
import { muiStyles } from './styles';

const PageTitle: FC = () => {
  return (
    <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={muiStyles.title} variant='h1'> {M.get('pages.platform.overview.overview')} </Typography>
        <Typography sx={muiStyles.date} variant='h1'>
          {moment(new Date()).format('dddd')}, {moment(new Date()).format('DD')} {moment(new Date()).format('MMMM')}
        </Typography>
      </Box>
      <Box component='div'>
        <CustomButton
          label={M.get('pages.platform.overview.requestApplicationForm')}
          variant='contained'
          onClick={() => console.log("Clicked request an application")}
          sx={muiStyles.requestAppBtn}
          btnType='default'
        />
      </Box>
    </Box>
  );
};

export default PageTitle;
