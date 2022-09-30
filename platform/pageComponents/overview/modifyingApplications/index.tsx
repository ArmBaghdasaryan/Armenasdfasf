import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import NotificationIcon from '../../../../src/assets/icons/notification-icon.svg';
import ArrowRightBtn from '../../../../src/assets/icons/arrow-right-btn.svg';
import { iApplication } from "../../../configs/types";
import M from '../../../../src/messages'
import { muiStyles } from './styles';

interface iProps {
  applications: iApplication[]
}
const ModifyingApplications: FC<iProps> = ({ applications }) => {

  return (
    <>
      {applications.map((app: iApplication) => (
        <Box key={app.id} component='div' sx={muiStyles.root}>
          <Box component="div" sx={{ display: 'flex', alignItems: 'center', }}>
            <Box component="div" sx={{}}>
              <NotificationIcon />
            </Box>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
              <Typography sx={muiStyles.title}>{app.name}</Typography>
              <Typography sx={muiStyles.desc}>{M.get('pages.platform.overview.addModificationsNeeded')}</Typography>
            </Box>
          </Box>
          <Box>
            <IconButton disableRipple sx={muiStyles.rightArrow}>
              <ArrowRightBtn />
            </IconButton>
          </Box>
        </Box>
      ))}
    </>
  )
};

export default ModifyingApplications;
