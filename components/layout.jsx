import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAdjust,
  faEnvelope,
  faFolderTree,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Layout({ children }) {
  const router = useRouter();
  const handleClcikTheme = () => {
    document.body.classList.toggle("light-mode");
  };
  const locale = router.locale;
  const changeLanguage = () => {
    router.push(router.pathname, router.asPath, {
      locale: router.locale === "en" ? "es" : "en",
      scroll: false,
    });
  };
  return (
    <div>
      <Head>
        <title>Ing. Henry Eraso - Curriculum Vitae</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      {children}
      <div className="controls">
        <div
          className={router.asPath == "/" ? "control active-btn" : "control"}
        >
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faHome} />
            </a>
          </Link>
        </div>
        <div
          className={
            router.asPath == "/about" ? "control active-btn" : "control"
          }
        >
          <Link href="/about">
            <a>
              <FontAwesomeIcon icon={faAddressCard} />
            </a>
          </Link>
        </div>
        <div
          className={
            router.asPath == "/portfolio" ? "control active-btn" : "control"
          }
        >
          <Link href="/portfolio">
            <a>
              <FontAwesomeIcon icon={faFolderTree} />
            </a>
          </Link>
        </div>
        <div
          className={
            router.asPath == "/contact" ? "control active-btn" : "control"
          }
        >
          <Link href="/contact">
            <a>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Link>
        </div>
      </div>
      <div className="theme-btn" onClick={handleClcikTheme}>
        <FontAwesomeIcon icon={faAdjust} />
      </div>
      <div
        onClick={changeLanguage}
        defaultValue={locale}
        className="language-btn"
      >
        {locale === "en" ? (
          <span onClick={changeLanguage}>ES</span>
        ) : (
          <span onClick={changeLanguage}>EN</span>
        )}
      </div>
    </div>
  );
}
