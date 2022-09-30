<#import "template.ftl" as layout>

<#--  NOTE: delete  -->
<#assign backToLoginTxt>
  ${kcSanitize(msg("backToLogin"))?no_esc}
</#assign>

<#assign registerFirstNameError>
  <#if messagesPerField.existsError('firstName')>
    ${kcSanitize(messagesPerField.get('firstName'))?no_esc}
  </#if>
</#assign>

<#assign registerLastNameError>
  <#if messagesPerField.existsError('lastName')>
    ${kcSanitize(messagesPerField.get('lastName'))?no_esc}
  </#if>
</#assign>

<#assign registerEmailError>
  <#if messagesPerField.existsError('email')>
    ${kcSanitize(messagesPerField.get('email'))?no_esc}
  </#if>
</#assign>

<#assign registerUsernameError>
  <#if messagesPerField.existsError('username')>
    ${kcSanitize(messagesPerField.get('username'))?no_esc}
  </#if>
</#assign>

<#assign registerPassError>
  <#if messagesPerField.existsError('password')>
    ${kcSanitize(messagesPerField.get('password'))?no_esc}
  </#if>
</#assign>

<#assign registerConfirmPassError>
  <#if messagesPerField.existsError('password-confirm')>
    ${kcSanitize(messagesPerField.get('password-confirm'))?no_esc}
  </#if>
</#assign>

<#--  <div id="root">
  <@layout.registrationLayout displayMessage=!messagesPerField.existsError('firstName','lastName','email','username','password','password-confirm'); section>
    <#if section = "header">
        ${msg("registerTitle")}
    </#if>
  </@layout.registrationLayout>
</div>  -->

  <@layout.registrationLayout displayMessage=!messagesPerField.existsError('firstName','lastName','email','username','password','password-confirm'); section>
    <#if section = "form">
      <div id="root"></div>
    </#if>
</@layout.registrationLayout>

<script>
  // page name to show Registration or expired page
  window.ftlPageName = 'register';
  window.ftlParams = {};
  
  // submit action
  window.ftlParams.registrationAction = "${url.registrationAction?js_string}".replace(/&amp;/g, '&');

  // Login url
  window.ftlParams.loginUrl = "${url.loginUrl?js_string}".replace(/&amp;/g, '&');

  // Login url link text NOTE: delete
  window.ftlParams.backToLoginTxt = `${backToLoginTxt}`;

  // Error messages
  window.ftlParams.registerFirstNameError = `${registerFirstNameError}`;
  window.ftlParams.registerLastNameError = `${registerLastNameError}`;
  window.ftlParams.registerEmailError = `${registerEmailError}`;
  window.ftlParams.registerUsernameError = `${registerUsernameError}`;
  window.ftlParams.registerPassError = `${registerPassError}`;
  window.ftlParams.registerConfirmPassError = `${registerConfirmPassError}`.replace('&#39;', "'");

  // Values
  window.ftlParams.registerFirstNameValue = "${(register.formData.firstName!'')}".replace(/&amp;/g, '&');;
  window.ftlParams.registerLastNameValue = "${(register.formData.lastName!'')}".replace(/&amp;/g, '&');
  window.ftlParams.registerEmailValue = "${(register.formData.email!'')}".replace(/&amp;/g, '&');
  window.ftlParams.registerUsernameValue = "${(register.formData.username!'')}".replace(/&amp;/g, '&');
</script>
