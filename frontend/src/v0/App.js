import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Project from './project';
import Model from 'react-modal';


function App() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [projectErrors, setProjectErrors] = useState("");
  const [serviceErrors, setServiceErrors] = useState("");
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/project/")
      .then(res => { setProjects(res.data); console.log(res.data) })
      .catch(err => setProjectErrors(err.message));
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/service/")
      .then(res => { setServices(res.data); console.log(res.data[0].image) })
      .catch(err => setServiceErrors(err.message));
  }, []);

  if (projects.length > 0 && projects[0].image) {
    return (
      <div className="article-page">
        {/* <!-- Header --> */}
        <header className="header" data-section-theme="dark">
          <div className="container">
            <div className="header-container">
              <div className="header-logo">
                <a href="#">
                  <img src="/images/favicon.jpg" alt="Techium logo" width="40" height="40" />
                  <span>IC Engineering</span>
                </a>
              </div>
              <input type="checkbox" id="menu-btn" className="menu-btn" />
              <label htmlFor="menu-btn" className="menu-icon"><span className="navicon"></span></label>
              <nav className="navbar-menu">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link">Services</a>
                  </li>
                  <li className="nav-item">
                    <a href="#works" className="nav-link">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link">About</a>
                  </li>

                  <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                  </li>
                  <li className="nav-item">
                    <form action="#" method="post" className="form-search">
                      <input type="search" name="q" id="search-input" placeholder="Search..."
                        aria-label="Search through site content" />
                      <button className="search-button">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                          className="search-icon">
                          <title>
                            Search icon
                          </title>
                          <path
                            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z">
                          </path>
                        </svg>
                      </button>
                    </form>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- Main --> */}
        <main>
          {/* <!-- Hero section --> */}
          <section className="section-hero hero-homepage" data-section-theme="dark">
            <div className="container">
              <div className="section-body">
                <section className="section-inner">
                  <h2 className="section-title">We help you bring life to your dream project</h2>
                  <a href="#" className="button">Get Started</a>
                </section>
              </div>
            </div>
          </section>
          {/* <!-- Services section --> */}
          <section id="services" className="section section-services">
            <div className="container">
              <header className="section-header">
                <h2 className="section-title">Services</h2>
                <p className="section-tagline">What we do</p>
              </header>
              <div className="section-body">
                <ul className="row">
                  <li className="col-1-3">
                    <div className="card-services">
                      <h3 className="card-title"><a onClick={() => setVisible(true)} href="#">Build-to-suit development</a></h3>
                      <Model isOpen={visible} onRequestClose={() => setVisible(false)} style={{
                        overlay: {
                          background: "grey"
                        },
                        content: {
                          width: "1000px",
                          height: "600px"
                        }
                      }}>
                        <Project setVisible={setVisible}/>
                      </Model>
                    </div>
                  </li>
                  <li className="col-1-3">
                    <div className="card-services">
                      <h3 className="card-title"><a href="#">Build-to-rest development</a></h3>
                    </div>
                  </li>
                  <li className="col-1-3">
                    <div className="card-services">
                      <h3 className="card-title"><a href="#">Ground-up development</a></h3>
                    </div>
                  </li>
                </ul>
                <ul className="row">
                  <li className="col-1-3">
                    <div className="card-services">
                      <h3 className="card-title"><a href="#">Real estate syndications</a></h3>
                    </div>
                  </li>
                  <li className="col-1-3">
                    <div className="card-services">
                      <h3 className="card-title"><a href="#">Web Development</a></h3>
                    </div>
                  </li>
                  <li className="col-1-3">
                    <div className="card-services">
                      <h3 className="card-title"><a href="#">Joint venture & partnership</a></h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- Works section --> */}
          <section id="works" className="section section-works" data-section-theme="dark">
            <div className="container">
              <header className="section-header">
                <h2 className="section-title">Notable Projects</h2>
                <p className="section-tagline">Take a look at our portfolio</p>
              </header>
              <div className="section-body">
                <ul className="row">
                  <li className="col-1-3">
                    <article className="card-work">
                      <div className="card-outer">
                        <div className="card-image">
                          <img src={`/logo${projects[0].image}`} alt="" />
                        </div>
                        <div className="card-inner">
                          <h3 className="card-title"><a href="#">{projects[0].title}</a></h3>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li className="col-1-3">
                    <article className="card-work">
                      <div className="card-outer">
                        <div className="card-image">
                          <img src={`/logo${projects[1].image}`} alt="" />
                        </div>
                        <div className="card-inner">
                          <h3 className="card-title"><a href="#">{projects[1].title}</a></h3>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li className="col-1-3">
                    <article className="card-work">
                      <div className="card-outer">
                        <div className="card-image">
                          <img src={`/logo${projects[2].image}`} alt="" />
                        </div>
                        <div className="card-inner">
                          <h3 className="card-title"><a href="#">{projects[2].title}</a></h3>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- About Us section --> */}
          <section id="about" className="section section-about-us">
            <div className="container">
              <header className="section-header">
                <h2 className="section-title">About Us</h2>
                <p className="section-tagline">Everything about us</p>
              </header>
              <div className="section-body">
                <div className="row">
                  <div className="col-1-2">
                    <img sizes="(max-width: 3000px) 40vw, 1200px" srcSet="
                    images/pic-about-01_ygw9wu_c_scale,w_1200.jpg 300w,
                    images/pic-about-01_ygw9wu_c_scale,w_1200.jpg 951w,
                    images/pic-about-01_ygw9wu_c_scale,w_1200.jpg 1200w"
                      src="images/pic-about-01_ygw9wu_c_scale,w_1200.jpg" alt="" />
                  </div>
                  <div className="col-1-2">
                    <h3>Who are we</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium
                      cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque
                      maxime cum!</p>
                    <h3>Our culture</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium
                      cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque
                      maxime cum!</p>
                    <h3>How we work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium
                      cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque
                      maxime cum!</p>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <a href="#" className="button">Learn more about us</a>
              </div>
            </div>
          </section>
          {/* <!-- Latest news section
        <section id="latest_news" className="section section-latest-news">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Latest News</h2>
            </header>
            <div className="section-body">
              <ul className="row">
                <li className="col-1-3">
                  <article className="card-blog">
                    <div>
                      <img sizes="(max-width: 3000px) 40vw, 1200px" srcSet="
                        images/pic-article-01_zxut6y_c_scale,w_300.jpg 300w,
                        images/pic-article-01_zxut6y_c_scale,w_950.jpg 950w,
                        images/pic-article-01_zxut6y_c_scale,w_1200.jpg 1200w"
                        src="images/pic-article-01_zxut6y_c_scale,w_1200.jpg" alt="">
                    </div>
                    <p className="card-category">Career</p>
                    <h3><a href="#">Hoc loco tenere se Triarius non potuit.</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem
                      modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
                    <small>By Kelly D.</small>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-blog">
                    <div>
                      <img sizes="(max-width: 3000px) 40vw, 1200px" srcSet="
                        images/pic-article-02_w3bt1y_c_scale,w_300.jpg 300w,
                        images/pic-article-02_w3bt1y_c_scale,w_931.jpg 931w,
                        images/pic-article-02_w3bt1y_c_scale,w_1200.jpg 1200w"
                        src="images/pic-article-02_w3bt1y_c_scale,w_1200.jpg" alt="">
                    </div>
                    <p className="card-category">Digital Life</p>
                    <h3><a href="#">Ut alios omittam, hunc appello, quem ille unum secutus est.</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain
                      tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus.
                      An nisi populari fama?</p>
                    <small>By William A.</small>
                  </article>
                </li>
                <li className="col-1-3">
                  <article className="card-blog">
                    <div>
                      <img sizes="(max-width: 3000px) 40vw, 1200px" srcSet="
                        images/pic-article-03_fx7nm7_c_scale,w_300.jpg 300w,
                        images/pic-article-03_fx7nm7_c_scale,w_911.jpg 911w,
                        images/pic-article-03_fx7nm7_c_scale,w_1200.jpg 1200w"
                        src="images/pic-article-03_fx7nm7_c_scale,w_1200.jpg" alt="">
                    </div>
                    <p className="card-category">Social</p>
                    <h3><a href="#">Bestiarum vero nullum iudicium puto.</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo
                      praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria;
                      Apparet statim, quae sint officia, quae actiones.</p>
                    <small>By Frances J.</small>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </section> --> */}
          {/* <!-- Testimonials section --> */}
          <section id="testimonial" className="section section-testimonial">
            <div className="container">
              <header className="section-header">
                <h2 className="section-title">Clients</h2>
                <p className="section-tagline">We are more than an engineering company</p>
              </header>
              <div className="section-body">
                <ul className="row">
                  <li className="col-1-3">
                    <article className="card-testimonial">
                      <img src="images/card_001.jpg" alt="Yuri Y. avatar" width="100" height="100" className="card-avatar" />
                      <blockquote className="card-quote">
                        <p>Client 1
                          <cite>North Carolina</cite>
                        </p>
                      </blockquote>
                    </article>
                  </li>
                  <li className="col-1-3">
                    <article className="card-testimonial">
                      <img src="images/card_001.jpg" alt="Dorrie S. avatar" width="100" height="100" className="card-avatar" />
                      <blockquote className="card-quote">
                        <p>Client 2
                          <cite>Newyork</cite>
                        </p>
                      </blockquote>
                    </article>
                  </li>
                  <li className="col-1-3">
                    <article className="card-testimonial">
                      <img src="images/card_001.jpg" alt="Sven H. avatar" width="100" height="100" className="card-avatar" />
                      <blockquote className="card-quote">
                        <p>Client 3
                          <cite>California</cite>
                        </p>
                      </blockquote>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- Contact section --> */}
          <section id="contact" className="section section-contact">
            <div className="container">
              <header className="section-header">
                <h2 className="section-title">Contact</h2>
                <p className="section-tagline">We’d love to hear from you!</p>
              </header>
              <div className="section-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At
                  eum nihili facit; Quae contraria sunt his, malane?</p>
              </div>
              <div className="section-footer">
                <a href="#" className="button">Get in touch</a>
              </div>
            </div>
          </section>
        </main>
        {/* <!-- Footer --> */}
        <footer className="footer" data-section-theme="dark">
          <div className="container">
            <div className="row">
              <div className="col-1-2">
                <img src="images/logo-white.png" alt="Techium logo" width="160" height="40" />
                <address className="footer-address">
                  2308 Jones Franklin RD.,<br />
                  Raleigh, NC<br />
                  27606
                </address>
              </div>
              <div className="col-1-2">
                <ul className="social nav">
                  <li className="social-item nav-item">
                    <a href="https://www.linkedin.com/" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
                        <title>LinkedIn</title>
                        <path
                          d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.61c-1.14 0-1.85-.77-1.85-1.73 0-.98.73-1.73 1.87-1.73 1.14 0 1.85.75 1.85 1.73-.02.96-.72 1.73-1.87 1.73zM20.45 20.45h-3.56V14.4c0-1.52-.54-2.55-1.88-2.55-1.03 0-1.65.69-1.92 1.36-.1.24-.13.56-.13.89v6.34H9.4s.05-10.3 0-11.45h3.56v1.62c.47-.73 1.31-1.78 3.2-1.78 2.34 0 4.09 1.52 4.09 4.79v6.82h-.01z" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item nav-item">
                    <a href="https://twitter.com/" className="social-link">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                        <title>
                          Twitter icon
                        </title>
                        <path
                          d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                  </li>
                  <li className="social-item nav-item">
                    <a href="tel:+1 (919) 271-0051" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
                        <title>Phone</title>
                        <path
                          d="M6.62 10.79a15.561 15.561 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.11.37 2.33.57 3.58.57.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C10.29 22.01 2 13.72 2 3.5c0-.55.45-1 1-1H6.5c.55 0 1 .45 1 1 0 1.25.2 2.47.57 3.58.11.36.03.76-.24 1.01l-2.2 2.2z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-1-2">
                <p className="footer-copyright">© 2024 IC Engineering Inc.</p>
              </div>
              <div className="col-1-2">
                <ul className="footer-nav nav">
                  <li className="footer-nav-item nav-item">
                    <a href="#" className="footer-nav-link">Terms of use</a>
                  </li>
                  <li className="footer-nav-item nav-item">
                    <a href="#" className="footer-nav-link">Privacy Policy</a>
                  </li>
                  <li className="footer-nav-item nav-item">
                    <a href="#" className="footer-nav-link">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
