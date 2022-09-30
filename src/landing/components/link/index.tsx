import React, { FC } from 'react';
import { Box, Typography, Link } from '@mui/material';
import Arrow from '../../../assets/icons/arrows.svg';

import { muiStyles } from './styles';

interface iProps {
  title: string;
  onClick: () => void;
  mouseEnter?: () => void;
  mouseLeave?: () => void;
  sx?: any;
  href?: string;
  className?: string;
}

const CustomLink: FC<iProps> = ({title, onClick, mouseEnter, mouseLeave, sx, href, className}) => {

  const handleClick = () => {
    onClick();
  };

  return (
    <Box
      onClick={handleClick}
      component={href ? Link : "div"}
      sx={{
        ...muiStyles.linkContainer,
        ...sx,
      }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      href={href}
      className={className}
    >
      <Typography sx={muiStyles.smallTitle} variant='h1'> {title} </Typography>
      <Box sx={{minWidth: '32px', minHeight: '32px', alignSelf: 'center', display: 'flex'}}><Arrow /></Box>
    </Box>
  );
};

export default CustomLink;
