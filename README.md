## Getting Started

Add ```.env``` file. 

Example
```
REACT_APP_API_URL=http://localhost:4000

REACT_APP_KEYCLOAK_URL=http://localhost:8081
REACT_APP_KEYCLOAK_AUTH_SERVER_URL=http://localhost:8081

REACT_APP_KEYCLOAK_REALM=camunda
REACT_APP_KEYCLOAK_CLIENT_ID=camunda-identity-service

KEYCLOAK_ID=camunda-identity-service
KEYCLOAK_SECRET=DCmiHFhEdY1QnlKGYr1sa1tpL6VMR6n0
KEYCLOAK_ISSUER=http://localhost:8081/realms/camunda
NEXT_PUBLIC_CAMUNDA_URL=http://localhost:8080/camunda

NEXTAUTH_SECRET=test
NEXTAUTH_URL=http://localhost:3000
```

First, run the development server:

```bash
yarn
cd dev
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.