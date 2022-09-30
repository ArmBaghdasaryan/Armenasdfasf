<#import "template.ftl" as layout>

<#assign errMsg>
  <#if messagesPerField.existsError('username','password')>
    ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
  </#if>
</#assign>

 <#--  <div id="root">
  <@layout.registrationLayout displayMessage=!messagesPerField.existsError('username','password') displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
  </@layout.registrationLayout>
</div>  -->

<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username','password') displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
  <#if section = "form">
    <div id="root"></div>
  </#if>
</@layout.registrationLayout>


<script>
  // page name to show login or expired page
  window.ftlPageName = 'login';
  window.ftlParams = {};

  // handling login error
  window.ftlParams.hasLoginError = !!`${errMsg}`;
  window.ftlParams.loginErrorMsg = `${errMsg}`;

  // submit action
  window.ftlParams.loginAction = "${url.loginAction?js_string}".replace(/&amp;/g, '&');

  // Forgot Password link
  window.ftlParams.loginResetCredentialsUrl = "${url.loginResetCredentialsUrl?js_string}".replace(/&amp;/g, '&');

  // Registration link
  window.ftlParams.registrationUrl = "${url.registrationUrl?js_string}".replace(/&amp;/g, '&');

  // Text field messages (NOTE: delete)
  // window.loginEmailMsg="${msg("username")}".replace(/&amp;/g, '&');
  // window.loginPasswordMsg="${msg("password")}".replace(/&amp;/g, '&');
  // window.doLogInMsg = "${msg("doLogIn")}".replace(/&amp;/g, '&');

  // Page texts (NOTE: delete)
  // window.doForgotPasswordMsg = "${msg("doForgotPassword")}".replace(/&amp;/g, '&');
  // window.noAccountMsg = "${msg("noAccount")}".replace(/&amp;/g, '&');
  // window.doRegisterMsg = "${msg("doRegister")}".replace(/&amp;/g, '&');

  // Values
  window.ftlParams.usernameValue="${(login.username!'')}".replace(/&amp;/g, '&');
</script>

