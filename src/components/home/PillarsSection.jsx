import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../stylesheets/home/style.css';

// Import pillar images
import pillar1Image from '../../img/pillars/narrative.jpg';
import pillar2Image from '../../img/pillars/intra-trade.jpg';
import pillar3Image from '../../img/pillars/international-trade.jpg';

const pillars = [
  {
    title: "Changing the Narrative",
    subtitle: "Empowering Africa's Story",
    description: "From Challenges to Opportunities",
    image: pillar1Image,
    delay: 200
  },
  {
    title: "Enhancing Intra-Africa Trade",
    subtitle: "Unifying Africa",
    description: "Driving Economic Growth through Regional Trade",
    image: pillar2Image,
    delay: 300
  },
  {
    title: "Promoting International Trade",
    subtitle: "Global Partnerships",
    description: "Sustainable African Prosperity",
    image: pillar3Image,
    delay: 400
  }
];

const PillarItem = ({ title, subtitle, description, image, delay }) => (
  <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={delay}>
    <div className="pillar-item position-relative">
      <div className="img">
        <img src={image} className="img-fluid" alt={title} />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

function PillarsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="pillars" className="pillars section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-title">
          <h2>Three Pillars</h2>
          <p>Our strategic approach to transforming African trade and development</p>
        </div>

        <div className="row gy-4">
          {pillars.map((pillar, index) => (
            <PillarItem key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;