import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import MeetingElement from './MeetingElement';
import { iMeeting } from '../../../../configs/types';
import M from '../../../../../src/messages'
import { muiStyles } from './styles';

interface iProps {
  meetings: iMeeting[]
}

const MeetingsBlock: FC<iProps> = ({ meetings }) => {
  return (
    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', mt: '48px' }}>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={muiStyles.title}>{M.get('pages.platform.overview.upcomingAppointments')}</Typography>
        </Box>
        <Box>
          <Button disableRipple sx={muiStyles.book} variant="outlined">
            {M.get('actions.book')}
          </Button>
        </Box>
      </Box>
      <Box>
        {meetings.map((meeting, index) => (
          <MeetingElement key={meeting.id} meeting={meeting} hasDivider={(index !== meetings.length - 1)} />
        ))}
      </Box>
    </Box>
  );
};

export default MeetingsBlock;
