import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Layout from "../../components/layout";
import en from "../../components/locales/en/portfolio";
import es from "../../components/locales/es/portfolio";

export default function Portfolio() {
  const router = useRouter();
  const t = router.locale === "en" ? en : es;
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
              {t.title.me} <span>{t.title.portfolio}</span>
              <span className="bg-text">{t.title.work}</span>
            </h2>
          </div>
          <p className="port-text">{t.introduction}</p>
          <div className="projects">
            <ul>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline"></p>

                    <h3 className="project-title">
                      <a href={t.project1.repositories.github}>
                        {t.project1.title}
                      </a>
                    </h3>

                    <div className="project-description">
                      <p>
                        {t.project1.description}{" "}
                        <a href={t.project1.link}>{t.project1.place}</a>{" "}
                      </p>
                    </div>

                    <ul className="project-tech-list">
                      {t.project1.tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>

                    <div className="project-links">
                      <a
                        href={t.project1.repositories.github}
                        aria-label="GitHub Link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>

                      <a
                        href={t.project1.repositories.youtube}
                        aria-label="External Link"
                        className="external"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={t.project1.repositories.youtube}>
                    <img src="/pj1.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline"></p>

                    <h3 className="project-title">
                      <a href={t.project2.repositories.github}>
                        {t.project2.title}
                      </a>
                    </h3>

                    <div className="project-description">
                      <p>
                        {t.project2.description[0]}{" "}
                        <a href={t.project2.link}>{t.project2.place}</a>
                        {t.project2.description[1]}{" "}
                      </p>
                    </div>

                    <ul className="project-tech-list">
                      {t.project2.tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>

                    <div className="project-links">
                      <a
                        href={t.project2.repositories.github}
                        aria-label="GitHub Link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={t.project2.repositories.github}>
                    <img src="/pj2.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline">{t.project3.private}</p>

                    <h3 className="project-title">
                      <a href={t.project3.repositories.github}>
                        {t.project3.title}
                      </a>
                    </h3>

                    <div className="project-description">
                      <p>{t.project3.description} </p>
                    </div>

                    <ul className="project-tech-list">
                      {t.project3.tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>
                  </div>
                </div>

                <div className="project-image">
                  <a href={t.project3.repositories.github}>
                    <img src="/pj3.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline"></p>

                    <h3 className="project-title">
                      <a href={t.project4.repositories.github}>
                        {t.project4.title}
                      </a>
                    </h3>

                    <div className="project-description">
                      <p>{t.project4.description} </p>
                    </div>

                    <ul className="project-tech-list">
                      {t.project4.tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>

                    <div className="project-links">
                      <a
                        href={t.project4.repositories.github}
                        aria-label="GitHub Link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={t.project4.repositories.oficialPage}>
                    <img src="/pj4.png" alt={"title"} className="img" />
                  </a>
                </div>
              </li>
              <li>
                <div className="project-content">
                  <div>
                    <p className="project-overline">{t.project5.private}</p>

                    <h3 className="project-title">
                      <a href={t.project5.repositories.github}>
                        {t.project5.title}
                      </a>
                    </h3>

                    <div className="project-description">
                      <p>{t.project5.description} </p>
                    </div>

                    <ul className="project-tech-list">
                      {t.project5.tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>
                  </div>
                </div>

                <div className="project-image">
                  <a href={t.project5.repositories.github}>
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
