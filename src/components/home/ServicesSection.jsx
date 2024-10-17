import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import InnovateIndustry from '../../img/services/Innovate.png';
import Certification from '../../img/services/Certification.png';
import Signature from '../../img/services/Signature.png';

const ServiceItem = ({ iconColor, image, title, linkTo, description, delay }) => (
  <div className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay={delay}>
    <div className={`icon-box ${iconColor}`}>
      <img loading="lazy" src={image} className="services-image" alt={title} />
      <h4 className="title"><Link to={linkTo}>{title}</Link></h4>
      <p className="description">{description}</p>
    </div>
  </div>
);

function ServicesSection() {

  // effect AOS en el componente
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Explore our range of services designed to foster growth, innovation, and sustainability in various sectors. Our approach is focused on creating impact and driving meaningful transformation in the global landscape.</p>
        </div>

        <div className="row">
          <ServiceItem
            linkTo="/"
            title="Innovative Industry Development"
            image={InnovateIndustry}
            description="Our Innovative Industry Development service empowers businesses to thrive in competitive markets by leveraging cutting-edge technologies and streamlined processes. We help industries modernise, optimise workflows, and implement forward-thinking solutions for sustained growth."
          />

          <ServiceItem
            linkTo="/"
            title="Certification"
            image={Certification}
            description="We offer a comprehensive certification service that ensures your organisation meets the highest international standards. Our expertise covers quality assurance, environmental sustainability, and health & safety, providing you with the credentials to excel in today's market."
            delay={100}
          />

          <ServiceItem
            linkTo="/"
            title="Signature PR and Communication Strategy"
            image={Signature}
            description="Our Signature PR and Communication Strategy service crafts bespoke communication campaigns that resonate with your target audience. From media relations to social media engagement, we ensure your message is impactful and strategically aligned with your brand's vision."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;