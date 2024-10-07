import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import partner1Logo from '../../img/partners/partner1-logo.jpg';
import partner2Logo from '../../img/partners/partner2-logo.png';
import partner3Logo from '../../img/partners/partner3-logo.png';
import partner4Logo from '../../img/partners/partner4-logo.png';

const partnerLogos = [
  { src: partner1Logo, alt: "Partner 1", href: "https://owit.org/" },
  { src: partner2Logo, alt: "Partner 2", href: "https://www.savvitas.com/" },
  { src: partner3Logo, alt: "Partner 3", href: "https://nbcc.org.ng/" },
  { src: partner4Logo, alt: "Partner 4", href: "https://www.cbwafrica.org/" },
];

export default function GetInvolved() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="get-involved" data-aos="fade-up">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="section-title">
              <h2 className="partners-title">Our Partners</h2>
            </div>
            <div className="partner-logos-container">
              {partnerLogos.map((logo, index) => (
                <a 
                  key={index} 
                  href={logo.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="partner-logo-link"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="partner-logo img-fluid" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <h2 className="get-involved-title">Get Involved</h2>
            <p className="lead">Partnership Opportunities: Collaborate with us to drive sustainable development.</p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <Link to="/contact" className="btn-get-started animate__animated animate__fadeInUp">
              Enquire About Partnership Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}