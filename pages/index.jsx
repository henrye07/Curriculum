import React, { useRef, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Spline from "@splinetool/react-spline";
import Layout from "../components/layout";
import en from "./locales/en/home";
import es from "./locales/es/home";

export default function Home() {
  const splineRef = useRef();
  const router = useRouter();
  function onLoad(splineApp) {
    splineRef.current = splineApp;
  }
  const t = router.locale === "en" ? en : es;
  return (
    <Suspense fallback={<div className="loading"></div>}>
      <Layout>
        <header
          id="home"
          className={
            router.pathname == "/"
              ? "container-home header active"
              : "container-home header"
          }
        >
          <div className="header-ctn">
            <Spline
              className="spline"
              scene="https://prod.spline.design/xMLI6qe0FQiy6OpC/scene.splinecode"
              onLoad={onLoad}
            />
            <div className="lower-ctn">
              <div className="left-header">
                <div className="ctn">
                  <h1 className="name">
                    {t.hello}
                    <br />
                    <span> {t.name}</span>
                    <br />
                    {t.profession}
                  </h1>
                  <p>{t.description}</p>
                  <div className="btn-con">
                    <a
                      href="/curriculum vitae.pdf"
                      className="main-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="btn-txt">{t.download}</span>
                      <span className="btn-icon">
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-header "></div>
            </div>
          </div>
        </header>
      </Layout>
    </Suspense>
  );
}
