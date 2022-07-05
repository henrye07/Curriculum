import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faFileArrowDown,
  faGraduationCap,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
export default function About() {
  const router = useRouter();
  return (
    <Layout>
      <main>
        <section
          className={
            router.asPath == "/about"
              ? "container about active"
              : "container about"
          }
        >
          <div className="main-title">
            <h2>
              Acerca de <span>Mi</span>
              <span className="bg-text">About Me</span>
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
            <div className="right-about">
              <div className="image">
                <img src="/photo.jpg" alt="Mi foto" />
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">Mis Habilidades en Programación</h4>
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
                <FontAwesomeIcon icon={faGraduationCap} />
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
                <FontAwesomeIcon icon={faChalkboardUser} />
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
                <FontAwesomeIcon icon={faHouseLaptop} />
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
      </main>
    </Layout>
  );
}
