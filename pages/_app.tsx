import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { BarLoader } from 'react-spinners';
import { FirebaseAuthContextProvider } from '../src/contexts/FirebaseAuthContext';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
    router.events.on('routeChangeError', () => setIsLoading(false));

    return () => {
      router.events.off('routeChangeStart', () => setIsLoading(true));
      router.events.off('routeChangeComplete', () => setIsLoading(false));
      router.events.off('routeChangeError', () => setIsLoading(false));
    };
  }, [router]);

  return (
    <>
      {isLoading && <BarLoader height={3} width={'100%'} color={'#36d7b7'} />}
      <FirebaseAuthContextProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Smart Moving</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </FirebaseAuthContextProvider>
    </>
  );
};

export default App;