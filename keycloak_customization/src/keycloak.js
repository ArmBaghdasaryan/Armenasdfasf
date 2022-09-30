import Keycloak from "keycloak-js";
import SETTINGS from "./settings";

// TODO need to update credentials before deploying
const keycloak = new Keycloak({
  url: SETTINGS.keycloak.url,
  authServerUrl: SETTINGS.keycloak.authServerUrl,
  realm: SETTINGS.keycloak.realm,
  clientId: SETTINGS.keycloak.clientId,
});

export default keycloak;