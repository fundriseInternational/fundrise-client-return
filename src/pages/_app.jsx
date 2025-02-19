import "../styles/contact.css";
import "../styles/dashboard.css";
import "../styles/signup.css";
import "../styles/home.css";
import "../styles/global.css";
import "../styles/about.css";
import Head from "next/head";
import ThemeProvider from "../../providers/ThemeProvider";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <main>
          <Head>
            <title>Fundrise HU</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#0672CD" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/xtbSmall.png" />
            <link rel="apple-touch-icon" href="/xtbSmall.png" />
            <meta property="og:title" content="XTBglobalHU" />
            <meta
              property="og:description"
              content="Fundrise Company is a trusted paying binary and Cryptocurrency trading company. Earn high returns from our proven trading strategies."
            ></meta>
          </Head>
          <div>
            <a
              href="https://wa.me/36306154461"
              target="_blank"
              rel="noopener noreferrer"
              id="absWa"
            >
              <img src="/help.svg" alt="whatsapp" />
            </a>
          </div>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  );
}
