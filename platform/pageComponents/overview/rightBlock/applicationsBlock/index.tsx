import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ApplicationElement from './ApplicationElement';
import { iApplication } from '../../../../configs/types';
import { routes } from '../../../../../src/configs';
import M from '../../../../../src/messages'
import { muiStyles } from './styles';

interface iProps {
  applications: iApplication[]
}

const ApplicationsBlock: FC<iProps> = ({ applications }) => {
  const router = useRouter();

  const redirectToApplications = () => {
    router.push({ pathname: routes.next.applications.path }, undefined);
  }

  return (
    <Box component='div' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={muiStyles.title}>{M.get('pages.platform.overview.requestsToPayment')}</Typography>
          <Box sx={muiStyles.badge}>{applications.length}</Box>
        </Box>
        <Box>
          <Button onClick={redirectToApplications} disableRipple sx={muiStyles.viewAll} variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
            {M.get('actions.viewAll')}
          </Button>
        </Box>
      </Box>
      <Box>
        {applications.map((app, index) => (
          <ApplicationElement key={app.id} application={app} hasDivider={(index !== applications.length - 1)} />
        ))}
      </Box>
    </Box>
  );
};

export default ApplicationsBlock;
