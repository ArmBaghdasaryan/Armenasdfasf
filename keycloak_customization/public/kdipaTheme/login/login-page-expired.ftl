<#assign restartLoginUrl>${url.loginRestartFlowUrl}</#assign>
<#assign continueLoginUrl>${url.loginAction}</#assign>

<@layout.registrationLayout; section>
  <#if section = "form">
    <div id="root"></div>
  </#if>
</@layout.registrationLayout>

<script>
    window.ftlPageName = 'page-expired';
    window.ftlParams = {};
    window.ftlParams.restartLoginUrl = `${restartLoginUrl}`.replace(/&amp;/g, '&');
    window.ftlParams.continueLoginUrl = `${continueLoginUrl}`.replace(/&amp;/g, '&');
</script>