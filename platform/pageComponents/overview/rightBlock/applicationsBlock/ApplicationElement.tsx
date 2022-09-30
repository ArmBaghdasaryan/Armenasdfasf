import React, { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CustomButton from '../../../../../src/landing/components/button';
import { iApplication } from '../../../../configs/types';
import M from '../../../../../src/messages'
import { muiStyles } from './styles';

interface iProps {
  application: iApplication
  hasDivider: boolean;
}

const ApplicationElement: FC<iProps> = ({ application, hasDivider }) => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={muiStyles.appName}>{application.name}</Typography>
          <CustomButton
            label={M.get('actions.pay')}
            variant='contained'
            onClick={() => console.log("Clicked pay")}
            sx={muiStyles.payBtn}
            btnType='default'
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
          <Box>
            <Typography sx={muiStyles.tableHeader}>{M.get('pages.platform.overview.paymentAmount')}</Typography>
            <Box sx={{ display: 'flex', mt: '4px' }}>
              <Typography sx={muiStyles.tableValue}>{application.price}</Typography>
              <Typography sx={muiStyles.tableValueThin}>{M.get('common.kwd')}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={muiStyles.tableHeader}>{M.get('pages.platform.overview.requestDate')}</Typography>
            <Box sx={{ display: 'flex', mt: '4px' }}>
              <Typography sx={muiStyles.tableValue}>{application.requestDate.split(',')[0]},</Typography>
              <Typography sx={muiStyles.tableValueThin}>{application.requestDate.split(',')[1]}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={muiStyles.tableHeader}>{M.get('pages.platform.overview.client')}</Typography>
            <Box sx={{ mt: '4px' }}>
              <Typography sx={muiStyles.tableValue}>{application.client}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {hasDivider && <Box sx={{ p: '24px 0' }}><Divider sx={muiStyles.divider} /></Box>}
    </Box>
  );
};

export default ApplicationElement;
