import '../styles/globals.css'
import '../styles/poppins.css';
import type { AppProps } from 'next/app'
import CustomThemeProvider from '../../src/configs/themes/CustomThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return <CustomThemeProvider><Component {...pageProps} /></CustomThemeProvider>
}

export default MyApp
