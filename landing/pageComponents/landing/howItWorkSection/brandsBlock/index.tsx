import React, { FC, memo, useMemo } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import ImageTicker from '../../../../../src/landing/components/imageTicker';
import { variables } from '../../../../../src/configs';
import { brands } from './config/config';

const BrandsBlock: FC = () => {

  const isMobile = useMediaQuery(`(max-width: ${variables.mobileSizeMax})`);

  const brandsList = useMemo(() => {
    return isMobile ? brands.mobile : brands.desktop
  }, [isMobile]);

  return (
    <Box component='div' sx={muiStyles.root}>
      <ImageTicker imageList={brandsList} />
    </Box>
  );
};

export default memo(BrandsBlock);

// Styles
const muiStyles = {
  root: {
    padding: { xs: '40px 0', sm: '80px 0', md: '80px 0', lg: '80px 0' },
    whiteSpace: 'nowrap'
  }
};