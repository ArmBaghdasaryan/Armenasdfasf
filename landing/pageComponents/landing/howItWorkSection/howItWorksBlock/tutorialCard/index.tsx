import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { muiStyles } from './styles';

interface iTutorialCard {
  id: string;
  title: string;
  description: string;
  icon: any;
}

interface iProps {
  card: iTutorialCard;
}
const TutorialCard: FC<iProps> = ({ card }) => {
  return (
    <Box component='div' sx={muiStyles.container}>
      <card.icon />
      <Typography sx={muiStyles.title} variant='h1'> {card.title} </Typography>
      <Typography sx={muiStyles.description} variant='h1'> {card.description} </Typography>
    </Box>
  );
};

export default TutorialCard;
