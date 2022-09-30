import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { animateScroll } from 'react-scroll';
import classNames from 'classnames';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { Drawer } from '@mui/material';

import CustomButton from '../../../../../src/landing/components/button';
import { routes } from '../../../../../src/configs';
import M from './../../../../../src/messages';

import CloseSvg from '../../../../../src/assets/icons/close.svg';
import KdipaMobileLogo from '../../../../../src/assets/logo/mobile-logo.svg';

import styles, { muiStyles } from './styles';
import { iSection } from '../interfaces';
import NavigationLink from '../navigationLink';


interface iProps {
  sections: iSection[];
  isDrawerOpen: boolean;
  lastSection: number;
  // eslint-disable-next-line no-unused-vars
  toggleDrawer: (open: boolean, event?: any) => void
  getOffset: () => number,
  setActiveID: (v: string) => void,
  activeID: string
}

const useStyles = makeStyles(styles);

const DrawerView: React.FC<iProps> = ({ sections, isDrawerOpen, toggleDrawer, getOffset, lastSection, setActiveID, activeID }) => {
  const classes = useStyles();
  const router = useRouter();

  const scrollToStart = () => {
    animateScroll.scrollToTop();
  };

  const isLoginPage = () => router.pathname === routes.next.login.path;

  const goToLogin = () => {
    toggleDrawer(false);
    router.push(routes.next.login.path);
  }

  const goToRegister = () => {
    scrollToStart();
    toggleDrawer(false);
    if (isLoginPage()) {
      window.location.reload();
    } else {
      router.push(routes.next.register.path);
    }
  }

  const handleLogoClick = () => {
    window.open(routes.portal.path);
  }

  const handleLinkClick = () => {
    toggleDrawer(false);
  };


  return (
    <Drawer
      anchor='right'
      open={isDrawerOpen}
      onClose={(e) => toggleDrawer(false, e)}
      PaperProps={{ sx: muiStyles.drawerRoot }}
    >
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-end' },
          padding: { xs: '12px 16px', sm: '16px 32px', md: '16px 32px', lg: '16px 32px', xl: '16px 32px' },
          height: 'fit-content'
        }}
      >
        <Box onClick={handleLogoClick} sx={{ cursor: 'pointer', height: 'fit-content', display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' }, mr: 3 }}>
          <KdipaMobileLogo />
        </Box>
        <IconButton onClick={(e) => toggleDrawer(false, e)} sx={{ padding: { xs: 0, sm: 1 }, height: 'fit-content' }}>
          <CloseSvg className={classes.svg} />
        </IconButton>
      </Box>
      <Box component='div' sx={muiStyles.drawerContainer}>
        <Box component='div' sx={muiStyles.main}>
          {sections.map((section) => {
            const { to } = section;
            return (
              <Box component='div' key={to}>
                <Box disableRipple component={MenuItem} sx={muiStyles.mobileLI} className={classNames(activeID === to && 'themeDrawerActiveMenuItem', 'themeDrawerMenuItem')}>
                  <NavigationLink getOffset={getOffset} section={section} key={section.to} activeID={activeID} setActiveID={setActiveID} onClick={handleLinkClick} />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box component='div' sx={muiStyles.drawerFooter}>
          <CustomButton
            label={M.get('actions.support')}
            variant='outlined'
            onClick={() => window.open(routes.portal.path)}
            sx={{ ...muiStyles.supportBtn, ...muiStyles.show }}
            btnType='secondary'
          />
          <CustomButton
            label={M.get('actions.login')}
            variant='contained'
            onClick={isLoginPage() ? goToRegister : goToLogin}
            sx={{ ...muiStyles.loginBtn, ...muiStyles.show }}
            btnType='default'
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerView;
