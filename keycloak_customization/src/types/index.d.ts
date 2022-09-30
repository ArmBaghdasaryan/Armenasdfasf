export {};

declare global {
  interface Window {
    ftlPageName: string;
    ftlParams: {
      // Login page
      loginAction: any;
      hasLoginError: boolean;
      loginErrorMsg: string;
      loginResetCredentialsUrl: string;
      registrationUrl: string;
      loginEmailMsg: string;         // NOTE: delete
      loginPasswordMsg: string;      // NOTE: delete
      doForgotPasswordMsg: string;   // NOTE: delete
      noAccountMsg: string;          // NOTE: delete
      doRegisterMsg: string;         // NOTE: delete
      doLogInMsg: string;            // NOTE: delete
      usernameValue: string;
      // Expire page
      pageExpTitle: string;          // NOTE: delete
      restartLoginUrl: string;
      continueLoginUrl: string;

      // Form error
      templateErrorMsg: string;
      templateErrorMsgType: string;

      // Registration page
      registrationAction: any;
      registerFirstNameError: string;
      registerLastNameError: string;
      registerEmailError: string;
      registerUsernameError: string;
      registerPassError: string;
      registerConfirmPassError: string;
      loginUrl: string;
      backToLoginTxt: string;       // NOTE: delete

      registerFirstNameValue: string;
      registerLastNameValue: string;
      registerEmailValue: string;
      registerUsernameValue: string;

      // Verify email
      verifyEmailUserEmail: string;
      verifyEmailResendLink: any;

      // Forgot Password
      fpUsernameError: string;
      fpUsernameValue: string;

      // Error page
      errorMessageSummary: string;
      skipLinkErrorPage: boolean;
      backToAppUrl: string;
    }
  }
}