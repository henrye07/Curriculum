import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useRef, Suspense, lazy } from "react";
import Layout from "../components/layout";

export default function Home() {
  const spline = useRef();
  const Spline = lazy(() => import("@splinetool/react-spline"));
  const router = useRouter();
  function onLoad(splineApp) {
    spline.current = splineApp;
  }
  return (
    <Layout>
      <header
        id="home"
        className={
          router.pathname == "/"
            ? "container header active"
            : "container header"
        }
      >
        <div className="header-ctn">
          <Suspense fallback={<div className="loading"></div>}>
            <Spline
              className="spline"
              scene="https://prod.spline.design/xMLI6qe0FQiy6OpC/scene.splinecode"
              onLoad={onLoad}
            />
          </Suspense>
          <div className="lower-ctn">
            <div className="left-header">
              <div className="ctn">
                <h1 className="name">
                  Hola, Yo soy
                  <br />
                  <span> Henry Eraso.</span>
                  <br />
                  Un Ingeniero de Petróleos.
                </h1>
                <p>
                  Soy un ingeniero de petróleos apasionado por la programación e
                  inteligencia artificial,quien se caracteriza por construir y
                  diseñar trabajos excepcionales. Actualmente, estoy terminando
                  mi carrera con un enfocado en la ingeniería de yacimientos y
                  profundizando en el desarrollo de software.
                </p>
                <div className="btn-con">
                  <a
                    href="/curriculum vitae.pdf"
                    className="main-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-txt">Descargar CV</span>
                    <span className="btn-icon">
                      <FontAwesomeIcon icon={faFileArrowDown} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="right-header "></div>
          </div>
          {/* <div className="lower-ctn">
            <div className="left-header">
              <div className="h-shape"></div>
              <div className="image">
                <img src="/photo.jpg" alt="Mi foto" />
              </div>
            </div>
            <div className="right-header">
              <h1 className="name">
                Hola, Yo soy
                <span className="name"> Henry Eraso.</span>
                <br />
                Un Ingeniero de Petróleos.
              </h1>
              <p>
                Soy un ingeniero de petroleos y apasionado por el desarrollo
                web, quien se especializa en contruir y diseñar trabajos
                excepcionales. Actualmente, estoy terminando mi carrera enfocado
                en la ingenieria de yacimientos y desarrollo de software.
              </p>
              <div className="btn-con">
                <a href="/curriculum vitae.pdf" className="main-btn" target="_blank" rel="noopener noreferrer">
                  <span className="btn-txt">Descargar CV</span>
                  <span className="btn-icon">
                    <FontAwesomeIcon icon={faFileArrowDown} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="upper-ctn">
            <Spline scene="https://prod.spline.design/xMLI6qe0FQiy6OpC/scene.splinecode" />
          </div> */}
        </div>
      </header>
    </Layout>
  );
}
