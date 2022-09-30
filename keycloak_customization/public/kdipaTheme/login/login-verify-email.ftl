<#import "template.ftl" as layout>

<#assign verifyEmailUserEmail>${user.email}</#assign>
<#assign verifyEmailResendLink>${url.loginAction}</#assign>

<@layout.registrationLayout displayInfo=true; section>
  <#if section = "form">
    <div id="root"></div>
  </#if>
</@layout.registrationLayout>

<script>
    window.ftlPageName = 'verify-email';
    window.ftlParams = {};
    window.ftlParams.verifyEmailUserEmail = `${verifyEmailUserEmail}`.replace(/&amp;/g, '&');
    window.ftlParams.verifyEmailResendLink = `${verifyEmailResendLink}`.replace(/&amp;/g, '&');
    console.log("window.ftlPageName - ", window.ftlPageName)
    console.log("window.verifyEmailUserEmail - ", window.verifyEmailUserEmail)
    console.log("window.verifyEmailResendLink - ", window.verifyEmailResendLink)
</script>
