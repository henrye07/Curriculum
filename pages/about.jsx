import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faFileArrowDown,
  faGraduationCap,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import en from "./locales/en/about";
import es from "./locales/es/about";

export default function About() {
  const languages = [
    ["HTML", "html", "90%"],
    ["CSS3", "css3", "80%"],
    ["JavaScript", "js", "75%"],
    ["Node Js", "node", "70%"],
    ["React Js", "react", "75%"],
    ["Next Js", "next", "75%"],
    ["Python Js", "python", "90%"],
    ["Django", "django", "70%"],
    ["Fast API", "fastapi", "70%"],
    ["Dart", "dart", "70%"],
    ["Flutter", "flutter", "60%"],
    ["Git & GitHub", "git", "70%"],
    ["GraphQL", "graphql", "60%"],
    ["Machine Learning", "machine-l", "65%"],
  ];
  const router = useRouter();
  const t = router.locale === "en" ? en : es;
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
              {t.about}
              <span>{t.me}</span>
              <span className="bg-text">
                {t.about} {t.me}
              </span>
            </h2>
          </div>
          <div className="about-container">
            <div className="left-about">
              <h4>{t.personalInformation.title}</h4>
              <p>
                {t.personalInformation.paragraph.first}
                <br /> {t.personalInformation.paragraph.second}
                <br />
              </p>
              <div className="btn-con">
                <a
                  href="/curriculum vitae.pdf"
                  className="main-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-txt">
                    {t.personalInformation.download}
                  </span>
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
            <h4 className="stat-title">{t.mySkills}</h4>
            <div className="progress-bars">
              {languages.map((value) => {
                return (
                  <div key={value[1]} className="progress-bar">
                    <p className="prog-title">{value[0]}</p>
                    <div className="progress-con">
                      <p className="prog-text">{value[2]}</p>
                      <div className="progress">
                        <span className={value[1]}></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <h4 className="stat-title">{t.timeline.title}</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <p className="tl-duration">2015 - 2022</p>
              <h5>
                {t.timeline.profession} <span> • {t.timeline.university}</span>
              </h5>
              <p>{t.timeline.degree}</p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faChalkboardUser} />
              </div>
              <p className="tl-duration">10/2019 - 11/2019</p>
              <h5>
                {t.timeline.course1.title}
                <span> • {t.timeline.university}</span>
              </h5>
              <p>{t.timeline.course1.duration}</p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faHouseLaptop} />
              </div>
              <p className="tl-duration">03/2021 - 12/2021</p>
              <h5>
                {t.timeline.course2.title}
                <span> • Mision Tic 2022 - {t.timeline.course2.location}</span>
              </h5>
              <p>{t.timeline.course2.duration}</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
