import React, { useEffect } from 'react';
import AOS from 'aos';
import About from '../../img/impactsection/about.jpg';
import 'aos/dist/aos.css';
import '../../stylesheets/home/style.css';

function VisionSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="main">
 
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
              <img loading="lazy" src={About} className="img-fluid" alt="About" />
            </div>
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
              <h3>Our Vision</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VisionSection;