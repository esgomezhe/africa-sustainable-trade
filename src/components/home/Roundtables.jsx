import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import roundtablesImage from '../../img/ast-roundtable.jpg';

export default function Roundtables() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="Roundtables" className="ast-roundtables" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="roundtables-title">AST Exclusive Roundtables</h2>
            <p className="lead">A transformative gathering of industry leaders to discuss construction, infrastructure development, economic advancement for women entrepreneurs, waste-to-energy, and tech education for young Africans.</p>
            <ul className="roundtables-list">
              <li>
                <i className="bi bi-check-circle-fill"></i>
                Catalyst Journey to Denmark: Explore collaborative opportunities with Danish officials.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i>
                Network with industry leaders and policymakers from across Africa and Europe.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i>
                Gain insights into sustainable development practices and innovative technologies.
              </li>
            </ul>
            <Link to="/apply" className="btn-apply animate__animated animate__fadeInUp">
              Apply to Join the Roundtables
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="roundtables-image" data-aos="zoom-in" data-aos-delay="100">
              <img src= {roundtablesImage} alt="AST Exclusive Roundtables" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}