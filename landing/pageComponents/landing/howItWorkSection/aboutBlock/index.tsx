import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { muiStyles } from './styles';
import M from './../../../../../src/messages';

const AboutBlock: FC = () => {
  return (
    <Box component='div'>
      <Typography sx={muiStyles.smallTitle} variant='h1'> {M.get('pages.landing.about.title')} </Typography>
      <Box component='div' sx={muiStyles.container}>
        <Typography sx={{ ...muiStyles.title, ...muiStyles.one }} variant='h1'>
          {M.get('pages.landing.about.desc.chapter_1')} <br />  {M.get('pages.landing.about.desc.chapter_2')}
        </Typography>
        <Box component='div' sx={muiStyles.two}>
          <Typography sx={muiStyles.secondaryTitle} variant='h1'> {M.get('pages.landing.about.investor.number')}</Typography>
          <Typography sx={muiStyles.lightText} variant='h1'> {M.get('pages.landing.about.investor.title')} <br /> {M.get('pages.landing.about.investor.desc')} </Typography>
        </Box>
        <Typography sx={{ ...muiStyles.normalText, ...muiStyles.three }} variant='h1'>
          {M.get('pages.landing.about.text.chapter_1')}
          <Box component='span' sx={{ color: 'secondary.main' }}>
            {M.get('pages.landing.about.text.chapter_2')}
          </Box>{' '}
          {M.get('pages.landing.about.text.chapter_3')} <br />
          {M.get('pages.landing.about.text.chapter_4')}
          <Box component='span' sx={{ color: 'secondary.main' }}>
            {M.get('pages.landing.about.text.chapter_5')}
          </Box>{' '}
          {M.get('pages.landing.about.text.chapter_6')}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutBlock;
