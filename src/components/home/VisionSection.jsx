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
              <br></br>
              <p className="fst-italic">
                Africa Sustainable Trade (AST) envisions transforming Africa into a beacon of sustainable trade and economic development, placing the continent at the forefront of global sustainability efforts. Our mission is to champion initiatives that blend economic prosperity, environmental stewardship, and social equity, harnessing Africa’s vast and unique resources—natural, cultural, and creative—to build a resilient and flourishing future.
              </p>
              <br></br>
              <p className="fst-italic">
                Through our dedicated pillars, we strive to promote clean energy solutions, support responsible agriculture, advance a circular economy, empower artisans, cultivate thriving creative industries, foster sustainable tourism, encourage visionary financial investments, and drive environmental innovation. AST aims to create a robust ecosystem that not only strengthens local economies but also preserves Africa’s rich heritage, enabling communities to thrive for generations to come. By setting a new standard for sustainable practices in Africa, AST seeks to inspire global respect and recognition for the continent’s contributions to a sustainable and equitable world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VisionSection;