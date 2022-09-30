import { SessionProvider } from "next-auth/react";
import '../styles/globals.css';
import '../styles/noto-sans.css';

import type { AppProps } from 'next/app'
import CustomThemeProvider from '../../src/configs/themes/CustomThemeProvider';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <CustomThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
