import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";

import "../index.css";
import "../App.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Redux App (NextJS v11)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
