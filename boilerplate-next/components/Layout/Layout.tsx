import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout: NextPage = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Global fallback title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header foo />

      <main className="p-4">{children}</main>

      <Footer foo />
    </div>
  );
};

export default Layout;
