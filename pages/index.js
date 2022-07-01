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
                  <span className="name"> Henry Eraso.</span>
                  <br />
                  Un Ingeniero de Petróleos.
                </h1>
                <p>
                  Soy un ingeniero de petroleos y apasionado por el desarrollo
                  web, quien se especializa en contruir y diseñar trabajos
                  excepcionales. Actualmente, estoy terminando mi carrera
                  enfocado en la ingenieria de yacimientos y desarrollo de
                  software.
                </p>
                <div className="btn-con">
                  <a href="" className="main-btn">
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
                <a href="" className="main-btn">
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
              About <span>me</span>
              <span className="bg-text">my stats</span>
            </h2>
          </div>
          <div className="about-container">
            <div className="left-about">
              <h4>Information About me</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                labore nihil obcaecati consequatur. Debitis error doloremque,
                vero eos vel nemo eius voluptatem dicta tenetur modi. <br />{" "}
                <br /> La musica delectus dolore fugiat exercitationem a, ipsum
                quidem quo enim natus accusamus labore dolores nam. Unde. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Harum non
                necessitatibus deleniti eum soluta.
              </p>
              <div className="btn-con">
                <a href="" className="main-btn">
                  <span className="btn-txt">Descargar CV</span>
                  <span className="btn-icon">
                    <FontAwesomeIcon icon={faFileArrowDown} />
                  </span>
                </a>
              </div>
            </div>
            <div className="right-about">
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">650+</p>
                  <p className="small-text">
                    Projects <br /> Completed
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">10+</p>
                  <p className="small-text">
                    Years of <br /> experience
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">300+</p>
                  <p className="small-text">
                    Happy <br /> Clients
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">400+</p>
                  <p className="small-text">
                    Customer <br /> reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              <div className="progress-bar">
                <p className="prog-title">html5</p>
                <div className="progress-con">
                  <p className="prog-text">80%</p>
                  <div className="progress">
                    <span className="html"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">css3</p>
                <div className="progress-con">
                  <p className="prog-text">95%</p>
                  <div className="progress">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">javascript</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="js"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">ReactJS</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">NodeJS</p>
                <div className="progress-con">
                  <p className="prog-text">87%</p>
                  <div className="progress">
                    <span className="node"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Python</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="python"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="stat-title">My Timeline</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">2010 - present</p>
              <h5>
                Web Developer<span> - Vircrosoft</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">2008 - 2011</p>
              <h5>
                Software Engineer<span> - Boogle, Inc.</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">2016 - 2017</p>
              <h5>
                C++ Programmer<span> - Slime Tech</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">2009 - 2013</p>
              <h5>
                Business Degree<span> - Sussex University</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">2013 - 2016</p>
              <h5>
                Computer Science Degree<span> - Brookes University</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="tl-duration">2017 - present</p>
              <h5>
                3d Animation<span> - Brighton University</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
          </div>
        </section>
        <section
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
        </section>
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
                Contact <span>Me</span>
                <span className="bg-text">Contact</span>
              </h2>
            </div>
            <div className="contact-content-con">
              <div className="left-contact">
                <h4>Contact me here</h4>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <a href="www.facebook.com" target="_blank">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" target="_blank">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" target="_blank">
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
        <div
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
        </div>
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
