import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../stylesheets/home/style.css';

import FeaturesImage from '../../img/svg/features-2.svg';

const Feature = ({ image, title, description, italicText, listItems }) => (
  <div className="row" data-aos="fade-up">
    <div className="col-md-5">
      <img loading="lazy" src={image} className="img-fluid" alt="" />
    </div>
    <div className="col-md-7 pt-4">
      <h3>{title}</h3>
      <p className="fst-italic">{italicText}</p>
      {description && <p>{description}</p>}
      {listItems && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}><i className="bi bi-check"></i> {item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

function FeaturesSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="features">
      <div className="container">

        <div className="section-title">
          <h2>AST Consortium</h2>
          <p>Transcending traditional boundaries, the Africa Sustainable Trade Consortium includes chapters such as mining, responsible agriculture, and clean energy, each tailored to revolutionise sustainable trade practices.</p>
        </div>

        <Feature
          image={FeaturesImage}
          title=""
          italicText="Strategic focus:"
          listItems={[
            <span><strong>Lendability Standards:</strong> Enhancing business appeal to lenders and investors</span>,
            <span><strong>Fiscal Incentives Advocacy:</strong> Partnering with governments for tax breaks and incentives.</span>,
            <span><strong>Data-Driven Insights:</strong> Informing policy and innovation with comprehensive data analysis.</span>,
            <span><strong>Innovation and Global Access:</strong> Promoting innovations that meet international sustainability standards.</span>,
            <span><strong>Empowering Community Voice:</strong> Amplifying community voices to enhance sustainable trade capacity.</span>
          ]}
        />

      </div>
    </section>
  );
}

export default FeaturesSection;