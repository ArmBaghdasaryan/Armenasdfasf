import React, { MutableRefObject, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useMediaQuery } from '@mui/material';
import { animateScroll, scroller } from 'react-scroll';
import qs from 'qs';

import CustomButton from '../../../../src/landing/components/button';
import { routes, variables } from '../../../../src/configs'

import KdipaLogo from '../../../../src/assets/logo/logo.svg';
import KdipaTabletLogo from '../../../../src/assets/logo/tablet-logo.svg';
import KdipaMobileLogo from '../../../../src/assets/logo/mobile-logo.svg';
import MenuSVG from '../../../../src/assets/icons/menu.svg';

import NavigationLink from './navigationLink';
import DrawerView from './drawerView';
import { muiStyles } from './styles';
import { iSection } from './interfaces';
import useScrollHelperBottom from '../../../../src/landing/hooks/useScrollHelper';
import M from './../../../../src/messages';

interface iProps {
  sections: iSection[];
  lastSection: number;
}

const ScrollingNavbar: React.FC<iProps> = ({ sections, lastSection }) => {
  const router = useRouter();

  const isMobile = useMediaQuery(`(max-width: ${variables.mobileSizeMax})`);
  const isTablet = useMediaQuery(`(max-width: ${variables.tabletSizeMax})`);
  const [activeID, setActiveID] = useState('home');
  const appBarRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const getAppBarHeightOffset = useCallback(() => -(appBarRef.current?.clientHeight || 0), [])

  const scrollToStart = () => {
    animateScroll.scrollToTop();
  };

  const handleRef = useCallback((el: HTMLDivElement | null) => {
    const urlParams = qs.parse(router.asPath.split('?')[1], { ignoreQueryPrefix: true });
    appBarRef.current = el
    if (urlParams.sectionPath) {
      setTimeout(
        () => {
          scroller.scrollTo(urlParams.sectionPath as string, {
            delay: 100,
            duration: 700,
            spy: true,
            smooth: true,
            offset: getAppBarHeightOffset() + 2
          })
          handleSetActiveIDRedirect(urlParams.sectionPath as string)
          setTimeout(
            () => handleSetActiveIDRedirect(urlParams.sectionPath as string),
            100 + 700 + 100
          )
        },
        200
      )
    } else {
      scrollToStart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetActiveIDRedirect = useCallback((to: string) => {
    const search = qs.stringify({ sectionPath: to }, { skipNulls: true });
    router.replace({ search }, undefined, { shallow: true });
    setActiveID(to)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSetActiveID = useScrollHelperBottom(handleSetActiveIDRedirect, sections && sections[lastSection].to, 20)

  const isLoginPage = () => router.pathname === routes.next.login.path;

  const goToLogin = () => {
    toggleDrawer(false);
    router.push({ pathname: routes.next.login.path }, undefined);
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

  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const handleLogoClick = () => {
    window.open(routes.portal.path);
  }

  const toggleDrawer = (open: boolean, event?: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar ref={handleRef} position='fixed' sx={muiStyles.header}>
      <Toolbar sx={muiStyles.toolbar}>
        <Box sx={{ mr: 3, cursor: 'pointer' }} onClick={handleLogoClick}>
          {isMobile ? <KdipaMobileLogo /> : isTablet ? <KdipaTabletLogo /> : <KdipaLogo />}
        </Box>
        <Box component='div' sx={muiStyles.barContent}>
          <Box component='ul' sx={muiStyles.ul}>
            {sections.map((section) => {
              return (
                <Box key={section.to} component='li' sx={muiStyles.li}>
                  <NavigationLink getOffset={getAppBarHeightOffset} section={section} key={section.to} activeID={activeID} setActiveID={handleSetActiveID} />
                </Box>
              );
            })}
          </Box>
          <CustomButton
            label={M.get('actions.support')}
            variant='outlined'
            onClick={() => window.open(routes.portalSupport.path)}
            btnType='secondary'
            sx={muiStyles.supportBtn}
          />
          <CustomButton
            label={M.get('actions.login')}
            variant='contained'
            onClick={isLoginPage() ? goToRegister : goToLogin}
            sx={muiStyles.loginBtn}
            btnType='default'
          />
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' } }}>
          <IconButton
            size='medium'
            aria-label='show more'
            aria-haspopup='true'
            onClick={() => toggleDrawer(true)}
            color='inherit'
          >
            <MenuSVG />
          </IconButton>
        </Box>
      </Toolbar>
      <DrawerView getOffset={getAppBarHeightOffset} lastSection={lastSection} sections={sections} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} activeID={activeID} setActiveID={handleSetActiveID} />
    </AppBar>
  );
};

export default ScrollingNavbar;
