import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import { Box, } from '@mui/material';

import { muiStyles } from './styles';

interface iProps {
  path: string;
  autoPlay?: boolean;
}
const Player: FC<iProps> = ({ path, autoPlay = false }) => {
  return (
    <Box component='div' sx={muiStyles.reactPlayer}>
      <ReactPlayer
        url={path}
        playing={autoPlay}
        width='100%'
        height='100%'
        controls
      />
    </Box>
  );
};

export default Player;
