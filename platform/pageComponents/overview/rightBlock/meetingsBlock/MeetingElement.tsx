import React, { FC } from 'react';
import moment from 'moment';
import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material';
import ArrowRightBtn from '../../../../../src/assets/icons/arrow-right-btn.svg';
import { iMeeting } from '../../../../configs/types';
import M from '../../../../../src/messages';
import { muiStyles } from './styles';

interface iProps {
  meeting: iMeeting
  hasDivider: boolean;
}

const ApplicationElement: FC<iProps> = ({ meeting, hasDivider }) => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '32px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ borderRadius: '6px', width: 32, height: 32, mr: 1 }} alt="name" src="https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
            <Typography sx={muiStyles.appName}>{meeting.client}</Typography>
          </Box>
          <Box>
            <IconButton disableRipple sx={muiStyles.rightArrow}>
              <ArrowRightBtn />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
          <Box>
            <Typography sx={muiStyles.tableHeader}>{M.get('pages.platform.overview.date')}</Typography>
            <Box sx={{ display: 'flex', mt: '4px' }}>
              <Typography sx={muiStyles.tableValue}>{moment(meeting.date).format('ll').split(',')[0].replace(' ', ', ')}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={muiStyles.tableHeader}>{M.get('pages.platform.overview.time')}</Typography>
            <Box sx={{ display: 'flex', mt: '4px' }}>
              <Typography sx={muiStyles.tableValue}>{moment(meeting.date).format('LT').split(' ')[0]}</Typography>
              <Typography sx={muiStyles.tableValueThin}>{moment(meeting.date).format('LT').split(' ')[1]}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={muiStyles.tableHeader}>{M.get('pages.platform.overview.company')}</Typography>
            <Box sx={{ mt: '4px' }}>
              <Typography sx={muiStyles.tableValue}>{meeting.company}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {hasDivider && <Box sx={{ p: '24px 0' }}><Divider sx={muiStyles.divider} /></Box>}
    </Box>
  );
};

export default ApplicationElement;
