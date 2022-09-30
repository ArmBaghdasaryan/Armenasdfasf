import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { routes } from '../../../../src/configs';

interface iSection {
  to: string;
  label: string;
  height: string;
  mobileHeight: string;
  tabletHeight: string;
  sectionComponent?: any;
}

interface iProps {
  section: iSection;
}

const Section: FC<iProps> = ({ section }) => {
  const router = useRouter();
  const isLoginPage = () => router.pathname === routes.next.login.path;

  return (
    <Box
      id={section.to}
      component='section'
      sx={{ minHeight: !isLoginPage() ? { xs: section.mobileHeight, sm: section.tabletHeight, md: section.tabletHeight, lg: section.height } : { minHeight: '100%', height: '100%' } }}
    >
      {section.sectionComponent && section.sectionComponent()}
    </Box>
  );
};
export default Section;
