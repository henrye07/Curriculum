import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import en from '../components//locales/en/contact'; 
import es from '../components//locales/es/contact'; 

export default function Contact() {
  const router = useRouter();
  const t= router.locale==='en'?en:es;
  return (
    <Layout>
      <main>
        <section
          id="contact"
          className={
            router.pathname == "/contact"
              ? "container contact active"
              : "container contact"
          }
        >
          <div className="contact-container">
            <div className="main-title">
              <h2>
                {t.title}<span>{t.me}</span>
                <span className="bg-text">{t.title}</span>
              </h2>
            </div>
            <div className="contact-content-con">
              <div className="left-contact">
                <h4>{t.description}</h4>
                <div className="contact-icons">
                  <div className="icons">
                    <a
                      href="https://www.facebook.com/henryeraso.07/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon icon-fb"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                      href="https://github.com/henrye07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon icon-github"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.instagram.com/henrye07/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon icon-instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/henryeraso/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon icon-linkedin"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
