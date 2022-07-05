import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Layout from "../../components/layout";

export default function Portfolio() {
  const router = useRouter();
  return (
    <Layout>
      <main>
        <section
          id="portfolio"
          className={
            router.pathname == "/portfolio"
              ? "container portfolio active"
              : "container portfolio"
          }
        >
          <div className="main-title">
            <h2>
              Mi <span>Portafolio</span>
              <span className="bg-text">My Work</span>
            </h2>
          </div>
          <p className="port-text">
            Aqui hay algo de mi trabajo que yo he desarrollado en diferentes
            lenguajes.
          </p>
          <div className="projects">
            <ul>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline"></p>

                    <h3 className="project-title">
                      <a
                        href={
                          "https://github.com/henrye07/eCommerce-Django-Bulma"
                        }
                      >
                        E-commerce
                      </a>
                    </h3>

                    <div className="project-description">
                      <p>
                        Proyecto desarrollado en el curso de desarrollo Web Full
                        Stack con Python y Javascript inpartido por{" "}
                        <a href="https://polotic.misiones.gob.ar/">PoloTic</a>{" "}
                      </p>
                    </div>

                    <ul className="project-tech-list">
                      <li>Django</li>
                      <li>JavaScript</li>
                      <li>Bulma</li>
                      <li>API Rest</li>
                    </ul>

                    <div className="project-links">
                      <a
                        href={
                          "https://github.com/henrye07/eCommerce-Django-Bulma#"
                        }
                        aria-label="GitHub Link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>

                      <a
                        href={"https://youtu.be/bAxOszRLo00#"}
                        aria-label="External Link"
                        className="external"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={"https://youtu.be/bAxOszRLo00#"}>
                    <img src="/pj1.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline"></p>

                    <h3 className="project-title">
                      <a href={"#"}>App de Inventario y Ventas</a>
                    </h3>

                    <div className="project-description">
                      <p>
                        Aplicación para realizar inventario de productos y su
                        respectivas ventas a los clientes con lo aprendido en{" "}
                        <a href="https://www.misiontic2022.gov.co/portal/">
                          MisionTic-2022
                        </a>
                        . Solo los usuarios autorizados pueden acceder a las
                        diferentes funcionalidades{" "}
                      </p>
                    </div>

                    <ul className="project-tech-list">
                      <li>React Js</li>
                      <li>Node Js</li>
                      <li>Prime React</li>
                      <li>Auth0</li>
                      <li>API Rest</li>
                    </ul>

                    <div className="project-links">
                      <a
                        href={"https://github.com/henrye07/misionTic-Ciclo3"}
                        aria-label="GitHub Link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={"https://github.com/henrye07/misionTic-Ciclo3"}>
                    <img src="/pj2.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline">Proyecto Privado</p>

                    <h3 className="project-title">
                      <a href={"#"}>App de Lavadero, Parqueadero y Pagos</a>
                    </h3>

                    <div className="project-description">
                      <p>
                        Aplicación que permite gestionar los lavados de
                        vehiculos, el parqueadero diario y mensual, inventario
                        de la empresa, pagos y gastos generales e individuales
                        para socios y empleados, usuarios con permisos
                        especiales(Admin) o permisos limitados(Secretari@){" "}
                      </p>
                    </div>

                    <ul className="project-tech-list">
                      <li>Next Js</li>
                      <li>Node Js</li>
                      <li>Prime React</li>
                      <li>GraphQL</li>
                    </ul>
                  </div>
                </div>

                <div className="project-image">
                  <a href={"#"}>
                    <img src="/pj3.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline"></p>

                    <h3 className="project-title">
                      <a href={"https://soft-asesorias.vercel.app/"}>
                        Soft Asesorias
                      </a>
                    </h3>

                    <div className="project-description">
                      <p>
                        LandPage de empresa provedora de servicios academicos de
                        universitarios, con direccionamiento automatico a
                        whatsapp Business{" "}
                      </p>
                    </div>

                    <ul className="project-tech-list">
                      <li>Next Js</li>
                    </ul>

                    <div className="project-links">
                      <a
                        href={"https://github.com/henrye07/Soft_Asesorias"}
                        aria-label="GitHub Link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={"https://soft-asesorias.vercel.app/"}>
                    <img src="/pj4.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline">Proyecto Privado</p>

                    <h3 className="project-title">
                      <a href={"#"}>Proyecto de Grado</a>
                    </h3>

                    <div className="project-description">
                      <p>
                        Aplicación que permite a traves de un archivo excel o
                        csv que contenga los datos de permeabilidad y porosidad
                        efectiva de un yacimiento, estimar las gargantas porales
                        y caracterizar las diferentes unidades hidraulicas a
                        traves del aprendizaje de maquinas no supervisado{" "}
                      </p>
                    </div>

                    <ul className="project-tech-list">
                      <li>Next Js</li>
                      <li>Streamlit</li>
                      <li>Machine Learning</li>
                      <li>API Rest</li>
                      <li>GraphQL</li>
                    </ul>
                  </div>
                </div>

                <div className="project-image">
                  <a href={"#"}>
                    <img src="/pj5.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

//   <div className="portfolios">
//     <div className="portfolio-item">
//       <div className="image">
//         <img src="/port1.jpg" alt="" />
//       </div>
//       <div className="hover-items">
//         <h3>Project Source</h3>
//         <div className="icons">
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="portfolio-item">
//       <div className="image">
//         <img src="/port2.jpg" alt="" />
//       </div>
//       <div className="hover-items">
//         <h3>Project Source</h3>
//         <div className="icons">
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="portfolio-item">
//       <div className="image">
//         <img src="/port3.jpg" alt="" />
//       </div>
//       <div className="hover-items">
//         <h3>Project Source</h3>
//         <div className="icons">
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="portfolio-item">
//       <div className="image">
//         <img src="/port4.jpg" alt="" />
//       </div>
//       <div className="hover-items">
//         <h3>Project Source</h3>
//         <div className="icons">
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="portfolio-item">
//       <div className="image">
//         <img src="/port5.jpg" alt="" />
//       </div>
//       <div className="hover-items">
//         <h3>Project Source</h3>
//         <div className="icons">
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="portfolio-item">
//       <div className="image">
//         <img src="/port2.jpg" alt="" />
//       </div>
//       <div className="hover-items">
//         <h3>Project Source</h3>
//         <div className="icons">
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="portfolio-item">
//       <div className="image">
//         <img src="/port7.jpg" alt="" />
//       </div>
//       <div className="hover-items">
//         <h3>Project Source</h3>
//         <div className="icons">
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="icon">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
