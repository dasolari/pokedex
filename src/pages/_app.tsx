import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/General/Layout';
import PokemonsContextProvider from '../contexts/PokemonContexts';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Pokédex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PokemonsContextProvider>
        <Component {...pageProps} />
      </PokemonsContextProvider>
    </Layout>
  );
}

export default MyApp
