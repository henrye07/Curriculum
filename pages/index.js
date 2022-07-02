import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAdjust,
  faEnvelope,
  faFileArrowDown,
  faFolderTree,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const router = useRouter();
  const handleClcikTheme = () => {
    document.body.classList.toggle("light-mode");
  };
  return (
    <div>
      <header
        id="home"
        className={
          router.asPath === "/" || router.asPath === "/#home"
            ? "container header active"
            : "container header"
        }
      >
        <div className="header-ctn">
          <Spline
            className="spline"
            scene="https://prod.spline.design/xMLI6qe0FQiy6OpC/scene.splinecode"
          />
          <div className="lower-ctn">
            <div className="left-header">
              <div className="ctn">
                <h1 className="name">
                  Hola, Yo soy
                  <br />
                  <span className="name"> Henry Eraso.</span>
                  <br />
                  Un Ingeniero de Petróleos.
                </h1>
                <p>
                  Soy un ingeniero de petroleos apasionado por la programación,
                  quien se especializa en contruir y diseñar trabajos
                  excepcionales. Actualmente, estoy terminando mi carrera con un
                  enfocado en la ingenieria de yacimientos, ademas de
                  profundizar en el desarrollo de software.
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
      <main>
        <section
          id="about"
          className={
            router.asPath == "/#about"
              ? "container about active"
              : "container about"
          }
        >
          <div className="main-title">
            <h2>
              Acerca de <span>Mi</span>
              <span className="bg-text">my stats</span>
            </h2>
          </div>
          <div className="about-container">
            <div className="left-about">
              <h4>Información Personal</h4>
              <p>
                Estudiante de Ingeniería de Petróleos de la Universidad
                Industrial de Santander. Me destaco por realizar proyectos con
                gran dedicación, organización, responsabilidad y compromiso. A
                pesar de mi falta de elaboración en campo, me he destacado por
                interpretar de la mejor manera los fundamentos teóricos.
                <br /> Además los trabajos en ambientes laborales no petroleros,
                me han formado como alguien con habilidades comunicativas para
                laborar en equipo y siempre adaptándome al ambiente de trabajo.
                <br />
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
            <div className="right-about">
              <div className="image">
                <img src="/photo.jpg" alt="Mi foto" />
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">Mis Habilidades</h4>
            <div className="progress-bars">
              <div className="progress-bar">
                <p className="prog-title">html5</p>
                <div className="progress-con">
                  <p className="prog-text">90%</p>
                  <div className="progress">
                    <span className="html"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">css3</p>
                <div className="progress-con">
                  <p className="prog-text">80%</p>
                  <div className="progress">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">JavaScript</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="js"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Node js</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="node"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">React js</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Next js</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="next"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Python</p>
                <div className="progress-con">
                  <p className="prog-text">90%</p>
                  <div className="progress">
                    <span className="python"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Django</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="django"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Fast API</p>
                <div className="progress-con">
                  <p className="prog-text">60%</p>
                  <div className="progress">
                    <span className="fastapi"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">git & github</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="git"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Graphql</p>
                <div className="progress-con">
                  <p className="prog-text">60%</p>
                  <div className="progress">
                    <span className="graphql"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Machine learning</p>
                <div className="progress-con">
                  <p className="prog-text">55%</p>
                  <div className="progress">
                    <span className="machine-l"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="stat-title">Mi linea de tiempo</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">2015 - presente</p>
              <h5>
                Ingeniería de Petróleos{" "}
                <span> • Universidad Industrial de Santander</span>
              </h5>
              <p>Fecha prevista de finalización: 2022.</p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">10/2019 - 11/2019</p>
              <h5>
                Curso de Introducción a CMG y CMOST para Aplicaciones Térmicas
                <span> • Universidad Industrial de Santander</span>
              </h5>
              <p>Duración: 40 horas</p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">03/2021 - 12/2021</p>
              <h5>
                Programa de formación habilidades en programación con énfasis en
                desarrollo de aplicaciones móviles
                <span> • Mision Tic 2022 - Universidad de Antioquia</span>
              </h5>
              <p>Duración: 1400 horas.</p>
            </div>
          </div>
        </section>
        {/* <section
          id="portfolio"
          className={
            router.asPath == "/#portfolio"
              ? "container portfolio active"
              : "container portfolio"
          }
        >
          <div className="main-title">
            <h2>
              My <span>Portfolio</span>
              <span className="bg-text">My Work</span>
            </h2>
          </div>
          <p className="port-text">
            Here is some of my work that I&apos;ve done in various programming
            languages.
          </p>
          <div className="portfolios">
            <div className="portfolio-item">
              <div className="image">
                <img src="/port1.jpg" alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="/port2.jpg" alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="/port3.jpg" alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="/port4.jpg" alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="/port5.jpg" alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="/port2.jpg" alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="/port7.jpg" alt="" />
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section
          id="contact"
          className={
            router.asPath == "/#contact"
              ? "container contact active"
              : "container contact"
          }
        >
          <div className="contact-container">
            <div className="main-title">
              <h2>
                Contacta<span>me</span>
                <span className="bg-text">Contact</span>
              </h2>
            </div>
            <div className="contact-content-con">
              <div className="left-contact">
                <h4>Comunicate conmigo por</h4>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <a href="https://www.facebook.com/henryeraso.07/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://github.com/henrye07" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.instagram.com/henrye07/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/henryeraso/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="controls">
        <div
          className={
            router.asPath == "/" || router.asPath == "/#home"
              ? "control control-1 active-btn"
              : "control control-1"
          }
        >
          <Link href="/#home">
            <a>
              <FontAwesomeIcon icon={faHome} />
            </a>
          </Link>
        </div>
        <div
          className={
            router.asPath == "/#about"
              ? "control control-2 active-btn"
              : "control control-2"
          }
        >
          <Link href="/#about">
            <a>
              <FontAwesomeIcon icon={faAddressCard} />
            </a>
          </Link>
        </div>
        {/* <div
          className={
            router.asPath == "/#portfolio"
              ? "control control-3 active-btn"
              : "control control-3"
          }
        >
          <Link href="/#portfolio">
            <a>
              <FontAwesomeIcon icon={faFolderTree} />
            </a>
          </Link>
        </div> */}
        <div
          className={
            router.asPath == "/#contact"
              ? "control control-4 active-btn"
              : "control control-4"
          }
        >
          <Link href="/#contact">
            <a>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Link>
        </div>
      </div>
      <div className="theme-btn" onClick={handleClcikTheme}>
        <FontAwesomeIcon icon={faAdjust} />
      </div>
    </div>
  );
}
