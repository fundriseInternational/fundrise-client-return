import "../styles/contact.css";
import "../styles/dashboard.css";
import "../styles/signup.css";
import "../styles/home.css";
import "../styles/global.css";
import "../styles/about.css";
import Head from "next/head";
import Image from "next/image";
import ThemeProvider from "../../providers/ThemeProvider";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <main>
          <Head>
            <title>XTB </title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#0672CD" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/XTB.WA.svg" />
            <link rel="apple-touch-icon" href="/XTB.WA.svg" />
            <meta property="og:title" content="XTBglobalHU" />
            <meta
              property="og:description"
              content="XTB Global Company is a trusted paying binary and Cryptocurrency trading company. Earn high returns from our proven trading strategies."
            ></meta>
          </Head>
          <div>
            <a
              href="https://t.me/2347018463783"
              target="_blank"
              rel="noopener noreferrer"
              id="absWa"
            >
              <Image src="/help.svg" alt="telegram" width={60} height={60} />
            </a>
          </div>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  );
}
