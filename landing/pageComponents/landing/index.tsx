import * as React from 'react';
import { useRouter } from 'next/router';

import { Box } from '@mui/material';
import { routes } from '../../../src/configs';
import Footer from '../../../src/landing/components/footer';

import ScrollingNavbar from './scrollingNavbar';
import Section from './section';
import { sections } from './config/config';

const LandingPage: React.FC = () => {
  const router = useRouter();
  const isLoginPage = () => router.pathname === routes.next.login.path;
  const items = isLoginPage() ? sections.link : sections.scroll;

  const forNavBar = React.useMemo(()=>[...items.sort((a, b) => a.originalPosition - b.originalPosition)], [items]);
  const forSection = React.useMemo(()=>[...items.sort((a, b) => a.position - b.position)], [items]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lastSection = React.useMemo(() => forNavBar.findIndex(({to})=>to==forSection[forSection.length-1].to), [items]);

  return (
    <Box component="div" sx={muiStyles.landingPage}>
      <ScrollingNavbar sections={forNavBar} lastSection={lastSection}/>
      {forSection.map((section) => (
        isLoginPage() ? section.to === 'home' &&
          <Section key={section.to} section={section} /> : <Section key={section.to} section={section} />
      ))}
      {!isLoginPage() && <Footer />}
    </Box>
  );
};

export default LandingPage;

// Styles

const muiStyles = {
  landingPage: {
    height: '100%',
    fontFamily: 'Poppins'
  },
};