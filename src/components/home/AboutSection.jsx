import React from "react";
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ServiceItem = ({ iconColor, iconClass, title, linkTo, description, delay }) => (
  <div className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay={delay}>
    <div className={`icon-box ${iconColor}`}>
      <div className="icon"><i className={`bx ${iconClass}`}></i></div>
      <h4 className="title"><Link to={linkTo}>{title}</Link></h4>
      <p className="description">{description}</p>
    </div>
  </div>
);

function AboutSection() {

  //effect AOS en el componente
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="about" className="services">
      <div className="container">

        <div className="section-title">
          <h2>About AST</h2>
          <p>At Africa Sustainable Trade (AST), we envision a future where African nations are not just participants but leaders in sustainable trade and innovation. 
            We're committed to a future where prosperity doesn't come at the expense of our environment or social values. 
            Here’s how we're turning this vision into reality with our 3 pillars:</p>
        </div>

        <div className="row">
          <ServiceItem
            iconColor="icon-box-pink"
            iconClass="bi bi-vector-pen"
            linkTo="/"
            title="Transforming the Narrative"
            description="To redefine Africa’s global image, Transforming the Narrative challenges outdated stereotypes by highlighting the continent’s diversity, innovation, 
            and resilience. Through positive media representation and authentic storytelling, we aim to foster a more accurate and empowering perception of Africa, 
            enhancing its global standing and inspiring internal growth."
          />

          <ServiceItem
            iconColor="icon-box-cyan"
            iconClass="bi bi-rocket-takeoff"
            linkTo="/"
            title="Boosting Intra-Africa Trade"
            description="Boosting Intra-Africa Trade is essential for economic stability and growth within the continent. By removing trade barriers, improving infrastructure, 
            and harmonising regulations, we create a more integrated and competitive market. This approach reduces reliance on external markets, stimulates local industries, 
            and fosters job creation, building a resilient and self-sustaining African economy."
            delay={100}
          />

          <ServiceItem
            iconColor="icon-box-green"
            iconClass="bi bi-currency-exchange"
            linkTo="/"
            title="Growing Global Trade"
            description="Expanding Africa’s presence in global markets is key to its economic diversification. Growing Global Trade leverages the continent’s natural resources and 
            entrepreneurial spirit to establish strong international partnerships. By enhancing export capabilities and investing in technology, we aim to increase Africa’s 
            role in global supply chains, driving prosperity and sustainable development through global collaboration."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;