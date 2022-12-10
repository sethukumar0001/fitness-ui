import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }:any) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="icon" href="favicon.png" type="image/png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
