const SETTINGS = {
  apiUrl: process.env.REACT_APP_API_URL,
  keycloak: {
    url:  process.env.REACT_APP_KEYCLOAK_URL,
    authServerUrl: process.env.REACT_APP_KEYCLOAK_AUTH_SERVER_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
  }
};

export default SETTINGS;