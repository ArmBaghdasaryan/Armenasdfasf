<#--  <#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
    <#if section = "header">
        ${kcSanitize(msg("errorTitle"))?no_esc}
    <#elseif section = "form">
        <div id="kc-error-message">
            <p class="instruction">${kcSanitize(message.summary)?no_esc}</p>
            <#if skipLink??>
            <#else>
                <#if client?? && client.baseUrl?has_content>
                    <p><a id="backToApplication" href="${client.baseUrl}">${kcSanitize(msg("backToApplication"))?no_esc}</a></p>
                </#if>
            </#if>
        </div>
    </#if>
</@layout.registrationLayout>  -->


<#import "template.ftl" as layout>

<#assign errorMessageSummary>${kcSanitize(message.summary)?no_esc}</#assign>
<#assign skipLinkErrorPage>
  <#if skipLink??>true</#if>
</#assign>
<#assign backToAppUrl>
    <#if client?? && client.baseUrl?has_content>${client.baseUrl}</#if>
</#assign>

<@layout.registrationLayout displayMessage=false; section>
  <#if section = "form">
    <div id="root"></div>
  </#if>
</@layout.registrationLayout>

<script>
    window.ftlPageName = 'error-page';
    window.ftlParams = {};
    window.ftlParams.errorMessageSummary = `${errorMessageSummary}`.replace(/&amp;/g, '&');
    window.ftlParams.skipLinkErrorPage = `${skipLinkErrorPage}`.replace(/&amp;/g, '&');
    window.ftlParams.backToAppUrl = `${backToAppUrl}`.replace(/&amp;/g, '&');

    console.log(window.ftlParams)
</script>