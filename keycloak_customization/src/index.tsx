import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomThemeProvider from '../../src/keycloak/customization/configs/themes/CustomThemeProvider';
import PageExpired from '../../src/keycloak/customization/PageExpired';
import Registration from '../../src/keycloak/customization/Registration';
import Login from '../../src/keycloak/customization/Login';
import VerifyEmail from '../../src/keycloak/customization/VerifyEmail';
import ForgotPassword from '../../src/keycloak/customization/ForgotPassword';
import ErrorPage from '../../src/keycloak/customization/ErrorPage';

document.addEventListener('DOMContentLoaded', () => {
  const ftlPageName = window.ftlPageName
  const ftlParams = window.ftlParams
  ReactDOM.render(
    <CustomThemeProvider>
      {
        ( ftlPageName === 'page-expired' && <PageExpired {...ftlParams}/> ) ||
        ( ftlPageName === 'register' && <Registration {...ftlParams}/> ) ||
        ( ftlPageName === 'login' && <Login {...ftlParams}/> ) ||
        ( ftlPageName === 'verify-email' && <VerifyEmail {...ftlParams}/> ) ||
        ( ftlPageName === 'forgot-password' && <ForgotPassword {...ftlParams}/> ) ||
        <ErrorPage {...ftlParams}/>
      }
    </CustomThemeProvider>,
    document.getElementById('root') as HTMLElement
  );
})
