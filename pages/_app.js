import "../styles/globals.css";
import Footer1 from "@/components/Footer1";
import Nav from "@/components/Nav";
// import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>GHAR REAL ESTATE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <NextNProgress />
        {/* <ThemeProvider> */}
          <ToastContainer />
          <Nav />
          <Component {...pageProps} />
          <Footer1 />
        {/* </ThemeProvider> */}
      </SessionProvider>
    </>
  );
}
