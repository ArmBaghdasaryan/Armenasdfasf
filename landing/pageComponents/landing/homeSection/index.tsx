import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { routes } from '../../../../src/configs';
import RegistrationComponent from './register';
import LoginComponent from './login';

const HomeSection: FC = () => {
  const router = useRouter();
  const isLoginPage = () => router.pathname === routes.next.login.path;

  return isLoginPage() ? (<LoginComponent />) : (<RegistrationComponent />);
};

export default HomeSection;
