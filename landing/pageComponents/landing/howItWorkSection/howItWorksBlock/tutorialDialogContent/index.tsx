import React, { FC } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, IconButton, Tab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Player from '../../../../../../src/landing/components/player';
import M from '../../../../../../src/messages';

import { muiStyles } from './styles';

const TutorialDialogContent: FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const [value, setValue] = React.useState('english');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={muiStyles.tabBox}>
      <TabContext value={value}>
        <Box component="div" sx={muiStyles.modalHeader}>
          <TabList onChange={handleChange} sx={muiStyles.tabList} TabIndicatorProps={{ sx: muiStyles.indicator }}>
            <Tab disableRipple label={M.get('languages.english')} value='english' sx={muiStyles.tab} />
            <Tab disableRipple label={M.get('languages.arabic')} value='arabic' sx={muiStyles.tab} />
          </TabList>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ width: '48px', height: '48px', color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <TabPanel value='english' sx={muiStyles.tabPanel}>
          <Player path='https://www.youtube.com/watch?v=sdDr-ZPs6kQ&ab_channel=KDIPA' />
        </TabPanel>
        <TabPanel value='arabic' sx={muiStyles.tabPanel}>
          <Player path='https://www.youtube.com/watch?v=sdDr-ZPs6kQ&ab_channel=KDIPA' />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TutorialDialogContent;
