import type {
  NextApiRequest,
  NextApiResponse,
} from "next"
import NextAuth from "next-auth"
import * as jwt from "next-auth/jwt"
import { JWT } from "next-auth/jwt"
import KeycloakProvider from "next-auth/providers/keycloak"

const refreshGapSeconds = 15

async function refreshAccessToken(token: JWT) {
  try {
    const details = {
      client_id: process.env.KEYCLOAK_ID,
      client_secret: process.env.KEYCLOAK_SECRET,
      grant_type: ["refresh_token"],
      refresh_token: token.refreshToken,
    }
    const formBody: string[] = [];
    Object.entries(details).forEach(([key, value]: [string, any]) => {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(value);
      formBody.push(encodedKey + '=' + encodedValue);
    });
    const formData = formBody.join('&');
    const url = `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formData,
    });

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }
    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + (refreshedTokens.expires_in - refreshGapSeconds) * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

const nextAuth = NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID!,
      clientSecret: process.env.KEYCLOAK_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER,
      }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      let expires_at = account?.expires_at
//      if ( !expires_at ) {
        // @ts-ignore
//        expires_at = account.exp - account.iat
//      }
//      console.log({expiresAt: expires_at})
      if (account) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
      }
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          idToken: account.id_token,
          accessTokenExpires: expires_at ? (expires_at - refreshGapSeconds)* 1000 : undefined,
          refreshToken: account.refresh_token,
          user,
        }
      }

      // Return previous token if the access token has not expired yet
      // @ts-ignore
      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token)
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
})

// https://github.com/nextauthjs/next-auth/issues/836#issuecomment-756019082
async function logout(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = await jwt.getToken({req})
    if ( !token ) {
//      log.warn("No JWT token found when calling /federated-logout endpoint")
      return res.redirect(process.env.NEXTAUTH_URL || '/')
    }
//    if (!token.idToken)
//     log.warn("Without an id_token the user won't be redirected back from the IdP after logout.")

    let redirect = '/'
    if ( 'redirect' in req.query ) {
      redirect = req.query.toString()
    }

    const endsessionURL = `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/logout`
    const endsessionParams = token.idToken ? new URLSearchParams({
      id_token_hint: token.idToken as string,
      post_logout_redirect_uri: (process.env.NEXTAUTH_URL || '')+redirect+'?logout=true',
    }) : ""
    return res.redirect(`${endsessionURL}?${endsessionParams}`)
  } catch (error) {
//    log.error(error)
    console.log('err', error)
    res.redirect(process.env.NEXTAUTH_URL || '/')
  }
}

export default function(req: NextApiRequest, res: NextApiResponse) {
  if ( req.query.nextauth && req.query.nextauth[0] == "logout" ) {
    return logout(req, res)
  }
  return nextAuth(req, res)
}