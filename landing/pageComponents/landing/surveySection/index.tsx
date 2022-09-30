import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomLink from '../../../../src/landing/components/link';
import { routes } from '../../../../src/configs';
import M from '../../../../src/messages';

import { muiStyles } from './styles';

const SurveySection: FC = () => {
  const handleConsultantClick = () => {
    window.open(routes.consultantCompaniesLink.path)
  };
  const handleInvestorClick = () => {
    window.open(routes.consultantCompaniesLink.path)
  };

  return (
    <Box component='div' sx={muiStyles.container}>
      <Typography sx={muiStyles.title} variant='h1'> {M.get('pages.landing.survey.title')} </Typography>
      <Box component='div' sx={muiStyles.main}>
        <Box component='div' sx={muiStyles.left}>
          <Typography sx={muiStyles.bigTitle} variant='h1'> {M.get('pages.landing.survey.desc.chapter_1')} </Typography>
          <Typography sx={muiStyles.bigTitle} variant='h1'> {M.get('pages.landing.survey.desc.chapter_2')} </Typography>
        </Box>
        <Box component='div' sx={muiStyles.right}>
          <CustomLink
            title={M.get('pages.landing.survey.links.survey')}
            onClick={handleConsultantClick}
            sx={{ ...muiStyles.linkStyle, ...muiStyles.borderRadiusBottom }}
            className="link1"
          />
          <CustomLink
            title={M.get('pages.landing.survey.links.ossInvestor')}
            onClick={handleInvestorClick}
            sx={{ ...muiStyles.linkStyle, ...muiStyles.borderRadiusTop }}
            className="link2"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SurveySection;
