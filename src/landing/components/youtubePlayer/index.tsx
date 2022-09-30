import React, { FC } from 'react';
import { Box } from '@mui/material';

import { muiStyles } from './styles';

const YoutubeEmbed: FC<{ embedId: string }> = ({ embedId }) => (
  <Box component='div' sx={muiStyles.reactPlayer}>
    <iframe
      width='100%'
      height='100%'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </Box>
);

export default YoutubeEmbed;
