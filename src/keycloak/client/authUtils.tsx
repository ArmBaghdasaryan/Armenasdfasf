import { signIn as signInBase, signOut as signOutBase, SessionProvider, SessionProviderProps } from "next-auth/react"
import { NextRouter, useRouter } from "next/router"
import React, { useEffect, useState } from "react"

export function signIn() {
  return signInBase("keycloak")
}

export function isLoggedOut(router: NextRouter) {
  const query = new URLSearchParams(router.asPath.split('?')[1])
  if ( !query.has('logout') ) {
    return false
  }
  return true
}

export function useAfterLogout() {
  const router = useRouter()
  const [loggedOut, setLoggedOut] = useState(false)
  useEffect(()=>{
    const query = new URLSearchParams(router.asPath.split('?')[1])
    if ( !query.has('logout') ) return

    signOutBase({redirect: false})
    setLoggedOut(true)
    query.delete("logout")
    router.replace(
        { pathname: router.pathname, query: query.toString() },
        undefined, 
        { shallow: true }
    );
  }, [router.query.logout])

  // Use isLoggedOut to make data look like user is not logged in.
  // Use loggedOutTip to show tip on logging out.
  return {
    isLoggedOut: isLoggedOut(router) || loggedOut,
    loggedOutTip: loggedOut
  }
}