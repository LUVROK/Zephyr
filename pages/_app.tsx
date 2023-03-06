import "../styles/globals.css";
import React, { useRef, useEffect, MutableRefObject, useState } from "react";
import Head from "next/head";
import { Menu } from "../components/header/menu/Menu";
import type { AppProps } from "next/app";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollTriggerProxy from "../utils/ScrollTriggerProxy";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import { Header } from "../components";

// eslint-disable-next-line import/no-default-export,@typescript-eslint/explicit-function-return-type
export default function App({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 11500);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.05,
        // InertiaPlugin: 0.05,
        smartphone: {
          smooth: false,
          lerp: 0.35,
        },
        tablet: {
          smooth: false,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "0px",
          pointerEvents: "none",
        }}
        id="topElement"
        key="topElement"
      ></div>
      <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
      <main className="main-cont" id="main-cont" data-scroll-container ref={containerRef}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="yandex-verification" content="b60a03f731c3f2d9" />
          <title>Zephyr</title>
        </Head>
        <ScrollTriggerProxy />
        <AnimatePresence>
          {Loaded ? null : <Loader />}
          <Header key="Header" />
          <Component {...pageProps} key="components" />
          <Menu key="Menu" />
        </AnimatePresence>
      </main>
    </LocomotiveScrollProvider>
  );
}
