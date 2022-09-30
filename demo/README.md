Add .env file, example
```
KEYCLOAK_ID=camunda-identity-service
KEYCLOAK_SECRET=DCmiHFhEdY1QnlKGYr1sa1tpL6VMR6n0
KEYCLOAK_ISSUER=http://localhost:8081/realms/camunda
NEXT_PUBLIC_CAMUNDA_URL=http://localhost:8080/camunda
```

Run
```
yarn
yarn dev
```

Sign in/out

<http://localhost:3000/api/auth/signin>

<http://localhost:3000/api/auth/signout>

Test button is located on the main screen
<http://localhost:3000>

Sometimes it returns 401 error when a token needs to be refreshed. Just sign in.